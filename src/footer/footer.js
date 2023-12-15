import React from "react";
import { FaGithubAlt, FaTwitter } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import {
  MdOutlineContactSupport,
  MdPadding,
  MdSupportAgent,
} from "react-icons/md";

import { FaDiscord } from "react-icons/fa6";
import { SiGnuprivacyguard } from "react-icons/si";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <div className="footer-links">
          <FaGithubAlt size={20} color="grey" />
          <a href="www.google.com">GitHub</a>
        </div>
        <div className="footer-links">
          <IoMdContact size={20} color="grey" />
          <a href="www.youtube.com">Contact</a>
        </div>
        <div className="footer-links">
          <MdSupportAgent size={20} color="grey" />
          <a href="www.google.com">Support</a>
        </div>
        <div className="footer-links">
          <FaDiscord size={20} color="grey" />
          <a href="www.youtube.com">Discord</a>
        </div>
        <div className="footer-links">
          <FaTwitter size={20} color="grey" />
          <a href="www.google.com">Twitter</a>
        </div>
        <div className="footer-links">
          <SiGnuprivacyguard size={20} color="grey" />
          <a href="www.youtube.com">Privacy</a>
        </div>
      </div>
      <div className="footer-version">
        <p>Version: 3.6</p>
      </div>
    </footer>
  );
}
