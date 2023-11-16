import React, { useState } from "react";
import './textarea.css';
import TextareaAutosize from 'react-textarea-autosize';

const text = "lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good mylorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my";

function TextArea() {

    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <div className="main-box">
            <div className="text-box" contentEditable="true" spellCheck="false">
                {text}
            </div>
        </div>
    );
}

export default TextArea;
