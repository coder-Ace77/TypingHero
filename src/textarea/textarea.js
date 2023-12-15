import React, { useState, useRef } from "react";
import './textarea.css';

var text = "|lorem ipsum hello world my name is good lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good mylorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my";
var ctext = text;
var textarray = text.split("");
var userInput = [];
var index = 0;
var state = 0;
var n_correct = 0;

function TextArea() {

    const [inputText, setInputText] = useState("\u007C" + text.substring(1));
    const [inputFocus, setInputFocus] = useState(true);
    const [speedText, setSpeedText] = useState(0);
    const [timeText, setTimeText] = useState(30);
    const inputRef = useRef(null);

    var time = 30;
    var speed = 0;


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
            if (e.key == ctext[index + 1]) {
                n_correct += 1;
                return true;
            }
            else
                return false;
        }
        return true;
    }


    const stateHandler = () => {

        // if 0 start the timer and set state 1 also set timer for given time after which set state to 2
        if (state == 0) {
            state = 1;
            setInterval(() => {
                //  time = timeText;
                time = time - 1;
                time = time >= 0 ? time : 0;
                console.log("Time", time);
                setTimeText(time);

                if (time > 0) {
                    speed = Math.floor(n_correct * 60 / (30 - time));
                    console.log(n_correct, speed);
                    setSpeedText(speed);
                }

            }, 1000);

            setTimeout(() => {
                state = 2;
            }, 30 * 1000);

            return true;
        }
        else if (state == 1) {
            return true;
        }
        else {
            return false;
        }
    }

    const handleInputChange = (e) => {

        var x = true;

        // check for state
        x = stateHandler();

        // backspace handler
        x = x && backspaceHandler(e);

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
            <div className="info-box">
                <span>{timeText}</span>
                <span>{speedText}w/m</span>
            </div>
            <div className="text-box" onClick={focusHandler}>
                <div dangerouslySetInnerHTML={{ __html: inputRenderer(inputText, ctext) }} />
            </div>
            <input onKeyDown={handleInputChange} autoFocus={true} className="inputBox" ref={inputRef}>
            </input>
        </div>
    );
}

export default TextArea;
