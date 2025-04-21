import React from "react";
import "../assets/Footer.css";
import { Box, IconButton } from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo & Description */}
        <div className="footer-column">
          <img
            src="https://www.seekpng.com/png/full/429-4290324_website-development-company-in-delhi-ecommerce-website-logo.png"
            alt="Logo"
            className="footer-logo"
          />
          <p className="footer-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            earum dolore provident!
          </p>
        </div>

        {/* Column 2: Useful Links */}
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/about">Our Team</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>
            <CiLocationOn fontSize="large" />
            1234 Street Name, City, Country
          </p>
          <p>
            <TfiEmail fontSize="medium" /> info@yourcompany.com
          </p>
          <p>
            <BsTelephone /> +1 234 567 890
          </p>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton size="small" sx={{ color: "black" }}>
              <FiFacebook fontSize="large" />
            </IconButton>
            <IconButton size="small" sx={{ color: "black" }}>
              <FaXTwitter fontSize="large" />
            </IconButton>
            <IconButton size="small" sx={{ color: "black" }}>
              <FaInstagram fontSize="large" />
            </IconButton>
            <IconButton size="small" sx={{ color: "black" }}>
              <FaLinkedinIn fontSize="large" />
            </IconButton>
          </Box>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
