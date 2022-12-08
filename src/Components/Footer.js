import React from "react";
// import Logo from "../Header/Logo";
import { Icon } from "@iconify/react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer"><span id="copy-right">copyright@2022</span>
      <div className="social-icons">
        <Icon icon="ri:facebook-fill" className="social-icon1" />
        <Icon icon="ri:instagram-line" className="social-icon2" />
        <Icon icon="ri:twitter-fill" className="social-icon3" />
      </div></div>
    </footer>
  );
}