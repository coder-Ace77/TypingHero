import React from "react"; 
import { FaGithubAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdOutlineContactSupport, MdPadding } from "react-icons/md";

import './footer.css'

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer-links">
            <FaGithubAlt size={25} color="grey"/>
            <a href="www.google.com" >GitHub</a>
            </div>
            <div className="footer-links">
            <IoMdContact size={25} color="grey"/>
            <a href="www.youtube.com">Contact</a>
            </div>
            <div className="footer-links">
            <MdOutlineContactSupport size={25} color="grey"/>
            <a href="www.google.com">Support</a>
            </div>
            <div className="footer-links">
            <IoMdContact size={25} color="grey"/>
            <a href="www.youtube.com">Discord</a>
            </div>
            <div className="footer-links">
            <IoMdContact size={25} color="grey"/>
            <a href="www.google.com">Twitter</a>
            </div>
            <div className="footer-links">
            <IoMdContact size={25} color="grey"/>
            <a href="www.youtube.com">Privacy</a>
            </div>
        </footer>
    )
}