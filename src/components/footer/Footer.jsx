import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Chauhan.</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer_link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.facebook.com/profile.php?id=100008371277851"
            className="footer_social-link"
            target="blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/_.abhi_.chauhan._/"
            className="footer_social-link"
            target="blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/Abhishe55868955"
            className="footer_social-link"
            target="blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer_copy">
          &#169;abhishekchauhan. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
