import React, { useState } from 'react';
import sanitizeHtml from 'sanitize-html';

export default function SearchBox(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const lowerCase = () => {
    const k = text.toLowerCase();
    setText(k);
  }

  const emt = () => {
    setText('');
  }

  const nks = () => {
    const p = text.trim().split(/\s+/).join(" ");
    setText(p);
  }

  const sanitizedText = sanitizeHtml(text, {
    allowedTags: [],
    allowedAttributes: {}
  });

  return (
    <div className={`bg-${props.darkMode} text-${props.darkMode === 'dark' ? 'white' : 'dark'} rounded pr-3 pb-3 pl-3`}>
      <div className="container">
        <h3 className='mt-5 pt-5'>Enter Your Text Below</h3>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.darkMode === 'dark' ? 'black' : 'white'} text-${props.darkMode === 'dark' ? 'white' : 'black'}`}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button disabled={!text} className="btn btn-success" onClick={handleUpClick}>Change into Uppercase</button>
        <button disabled={!text} className="btn btn-primary ms-2 mt-1" onClick={lowerCase}>Change into Lowercase</button>
        <button disabled={!text} className="btn btn-warning ms-2 mt-1" onClick={nks}>Remove Extra Space</button>
        <button disabled={!text} className="btn btn-danger ms-2 mt-1" onClick={emt}>Clear Text</button>
      </div>
      <div className="container">
        <h3 className='mt-3'>Text Summary</h3>
        <p>Word Count = {sanitizedText.trim().split(/\s+/).filter(Boolean).length}</p>
        <p>Total Characters = {sanitizedText.trim().split(/\s+/).filter(Boolean).join("").length}</p>
        <h3>Preview-</h3>
        <p id="koko">" {sanitizedText}"</p>
      </div>
    </div>
  );
}
