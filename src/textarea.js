import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import './textarea.css';
import TextareaAutosize from 'react-textarea-autosize';

import { FaBarsProgress } from "react-icons/fa6";
import { IoSettings, IoColorFill } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";

const text = "lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good mylorem ipsum hello world my name is good my lorem ipsum hello world my name is good my lorem ipsum hello world my name is good my";

const routes = [
    {
        path:"/about",
        name:'About',
        icon : <FaBarsProgress/>
    },
    {
        path:"/graph",
        name:'Graph',
        icon : <FaBarsProgress/>
    },
    {
        path:"/settings",
        name:'About',
        icon : <FaBarsProgress />
    },
    {
        path:"/theme",
        name:'Theme',
        icon : <FaBarsProgress />
    }
]


function TextArea() {

    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <div className="main-box">
            <div className="side-menu">
                <div className="settings-icon" >
                <IoSettings size={50} />
                </div>
            <FaBarsProgress size={50}  />
            <IoSettings size={50} />    
            <FaAddressBook size={50}/>
            <IoColorFill size={50}/>

                </div>
            <div className="text-box" contentEditable="true" spellCheck="false">
                {text}
            </div>

        </div>
    );
}

export default TextArea;
