import React, { useState, useEffect } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  }
  const handleUpClick = (event) => {
    setText(text.toUpperCase());
  }
  const handleLoClick = (event) => {
    setText(text.toLowerCase());
  }
  const clearTextBox = (event) => {
    setText("");
    document.getElementById('textanalyzer').focus();
  }
  const wordsCount = () => {
    if (text.trim() === "") return 0;
    else {
        let words = text.split(" ");
        let count = words.length;
        words.forEach(word => {
            if(word === "") count--;
        });
        return count;
    }
  }
  const readTime = () => {
    const time = 0.0008 * wordsCount();
    if (time < 1) return `${time*60} secs`;
    else if (time >= 1 && time <= 60) return `${time} mins`;
    return `${Number.parseInt(time/60)} hrs ${Number.parseInt(time%60)} mins ${Number.parseInt((time%60)%60)} secs`;
  }
  useEffect(() => {
    document.getElementById('textanalyzer').focus();
  }, []);
  return (
    <>
    <div className="container">
        <label htmlFor="textanalyzer" className='display-2 my-3 fw-semibold'>{props.label}</label>
        <textarea className="form-control" value={text} onChange={handleChange} placeholder={props.placeHolder} id="textanalyzer" rows="6"></textarea>
        <div className="btn-group my-3" role="group" aria-label="Basic example">
            <button className="btn btn-light" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-light mx-2" onClick={handleLoClick}>Lowercase</button>
            <button className="btn btn-light" onClick={clearTextBox}>clear</button>
        </div>
    </div>
    <div className="container text-style-controls">
        <div className="btn-group my-3" role="group" aria-label="Basic example">
            <button className="btn btn-light fw-bold">A</button>
            <button className="btn btn-light fw-bold">B</button>
            <button className="btn btn-light fst-italic">I</button>
            <button className="btn btn-light"><u>U</u></button>
        </div>
    </div>
    <div className="container text-summary my-2">
        <p> <b>{wordsCount()}</b> words & <b>{text.length}</b> characters</p>
        <p> <b>{readTime()}</b> required to read </p>
        <h2>Text Preview</h2>
        <p className="bg-secondary" style={{ color: "#ffffff" }}>{text}</p>
    </div>
    </>
  );
}
