import React, { useState, useRef } from "react";
import './textarea.css';

var text = "lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good mylorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my";

function TextArea() {

    const [inputText, setInputText] = useState(text);
    const main_text = useRef(null);
    let index = 0;

    const handleInputChange = (e) => {
        text = "111";
        console.log("Fired!!!", e.key);
        index += 1;
        text = text.substring(index);
        main_text.current.innerText = text;
        setInputText("");
    };

    return (
        <div className="main-box">
            <div className="text-box" contentEditable="true" spellCheck="false" onKeyDownCapture={handleInputChange} ref={main_text}>

                {inputText}
            </div>
        </div>
    );
}

export default TextArea;
