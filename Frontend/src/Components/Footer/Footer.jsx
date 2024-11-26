import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to={"/"}>
            <img src={assets.logo} alt="" />
          </Link>
          <p>This is very intersting food delivary app</p>
          <div className="footer-social-icons">
            <FaFacebook className="icons" />
            <FaInstagram className="icons" />
            <FaXTwitter className="icons" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Delivary</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <div>
                <FaPhoneAlt className="icon-2" />
                +91-8220172902
              </div>
            </li>
            <li>
              <div>
                <MdEmail className="icon-2" />
                umarkamil1472001@gmail.com
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Copyright 2024 @ Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
