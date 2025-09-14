import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer_outer_container">
      <div className="footer_inner_container">
        {/* Social Icons */}
        <div className="footer_icons">
          <a href="#" aria-label="Facebook">
            <FacebookOutlinedIcon />
          </a>
          <a href="#" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="YouTube">
            <YouTubeIcon />
          </a>
        </div>

        {/* Footer Links */}
        <div className="footer_links">
          <ul>
            <li>Audio Description</li>
            <li>Legal Notice</li>
            <li>Investor Relations</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Media Center</li>
            <li>Jobs</li>
          </ul>
          <ul>
            <li>Terms of Use</li>
            <li>Cookie Preferences</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <p className="footer_copyright">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
