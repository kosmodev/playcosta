import React from "react";
import style from "./Footer.css";

const Footer = () => (
    <footer className="revealed" >
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h3>Need help?</h3>
                <a href="tel://004542344599" id="phone">+45 423 445 99</a>
                <a href="mailto:help@citytours.com" id="email_footer">help@citytours.com</a>
            </div>
            <div className="col-md-3">
                <h3>About</h3>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                     <li><a href="#">Terms and condition</a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <h3>Discover</h3>
                <ul>
                    <li><a href="#">Community blog</a></li>
                    <li><a href="#">Tour guide</a></li>
                    <li><a href="#">Wishlist</a></li>
                     <li><a href="#">Gallery</a></li>
                </ul>
            </div>
            <div className="col-md-2">
                <h3>Settings</h3>
                <div className="styled-select">
                    <select name="lang" id="lang">
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Russian">Russian</option>
                    </select>
                </div>
                <div className="styled-select">
                    <select name="currency" id="currency">
                        <option value="USD" >USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="RUB">RUB</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div id="social_footer">
                    <ul>
                        <li><a href="#"><i className="icon-facebook"></i></a></li>
                        <li><a href="#"><i className="icon-twitter"></i></a></li>
                        <li><a href="#"><i className="icon-google"></i></a></li>
                        <li><a href="#"><i className="icon-instagram"></i></a></li>
                        <li><a href="#"><i className="icon-pinterest"></i></a></li>
                        <li><a href="#"><i className="icon-vimeo"></i></a></li>
                        <li><a href="#"><i className="icon-youtube-play"></i></a></li>
                    </ul>
                    <p>© Citytours 2018</p>
                </div>
            </div>
        </div>
    </div>
</footer>
)

export default Footer;