import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        {/* LEFT SECTION */}
        <div className="footer-column">
          <h2 className="footer-title">e Cyber Cafe</h2>
          <p className="footer-description">An e-Cyber Cafe is a place where people can use computers and the internet to do both offline and virtual work.</p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* CENTER SECTION (Quick Links) */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Service</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* RIGHT SECTION (Legal Info) */}
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookies Policy</a></li>
            <li><a href="#">Refunds</a></li>
          </ul>
        </div>

        {/* ADDITIONAL SECTION (Contact Info) */}
        <div className="footer-column">
          <h3>Contact Information</h3>
          <p>Email: helpsumitravi@gmail.com </p>
          <p>Phone: +91 9876543210</p>
          <p>Address: Ranchi, Jharkhand, IN</p>
        </div>
      </div>

      {/* BOTTOM SECTION (Contact Info + Copyright) */}
      <div className="footer-bottom">
        <p>&copy; e-Cyber Cafe All rights reserved</p>
        <p>Last updated : 15-07-2025</p>
      </div>
    </footer>
  );
};

export default Footer;
