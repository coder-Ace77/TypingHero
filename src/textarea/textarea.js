import React, { useState, useRef } from "react";
import './textarea.css';

var text = "|lorem ipsum hello world my name is good lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good mylorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my";
var ctext = text;
var textarray = text.split("");
var userInput = [];
var index = 0;

function TextArea() {

    const [inputText, setInputText] = useState("\u007C" + text.substring(1));
    const [inputFocus, setInputFocus] = useState(true);
    const inputRef = useRef(null);

    const backspaceHandler = (e) => {
        if (e.key != "Backspace") {
            return true;
        }

        if (index <= 0) {
            index -= 1;
            return true;
        }
        textarray[index] = ctext[index];
        textarray[index - 1] = "\u007C";
        index -= 1;
        return false;
    }

    const validateKey = (e) => {
        if (e.key.length > 1) {
            return false;
        }
        return true;
    }

    const checkspace = (e) => {
        if (e.key == " " || ctext[index + 1] == " ") {
            if (e.key == ctext[index + 1])
                return true;
            else
                return false;
        }
        return true;
    }


    const handleInputChange = (e) => {

        var x = true;

        // backspace handler
        x = backspaceHandler(e);

        // handle and validate input
        x = x && validateKey(e);

        // check space and non space
        x = x && checkspace(e);

        if (x) {
            textarray[index] = e.key;
            textarray[index + 1] = "\u007C";
            index += 1;
        }
        text = textarray.join("");
        setInputText(text);
    };

    function focusHandler(e) {
        console.log("Focus");
        inputRef.current.focus();
    };

    const inputRenderer = (inputText, ctext) => {
        var output = "";
        for (var i = 0; i < index; i++) {
            if (inputText[i] == ctext[i + 1]) {
                output += "<span class='correct'>" + inputText[i] + "</span>";
            }
            else {
                output += "<span class='incorrect'>" + inputText[i] + "</span>";
            }
        }

        for (var i = index; i < inputText.length; i++) {
            output += "<span class='untyped'>" + inputText[i] + "</span>";
        }
        return output;
    };

    return (
        <div className="main-box">
            <div className="text-box" onClick={focusHandler}>
                <div dangerouslySetInnerHTML={{ __html: inputRenderer(inputText, ctext) }} />
            </div>
            <input onKeyDown={handleInputChange} autoFocus={true} className="inputBox" ref={inputRef}>
            </input>
        </div>
    );
}

export default TextArea;
