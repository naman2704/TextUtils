import React, { useState } from 'react'

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
  }
  return (
    <div class="container">
    <label for="textanalyzer" className='display-2 my-3 fw-semibold'>{props.label}</label>
    <textarea class="form-control" value={text} onChange={handleChange} placeholder={props.placeHolder} id="textanalyzer" rows="10"></textarea>
    <ul class="list-group list-group-horizontal my-2">
        <li class="list-group-item">
            <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
        </li>
        <li class="list-group-item">
            <button className="btn btn-primary" onClick={handleLoClick}>Lowercase</button>
        </li>
        <li class="list-group-item">
            <button className="btn btn-primary" onClick={clearTextBox}>clear</button>
        </li>
    </ul>
    </div>
  );
}
