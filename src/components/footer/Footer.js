import React, { useContext } from "react";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./Footer.scss";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <a
            href="https://github.com/GouthamSrinu"
            target="_blank"
            rel="noreferrer"
          >
            by GS7
          </a>
        </p>
      </div>
    </Fade>
  );
}
