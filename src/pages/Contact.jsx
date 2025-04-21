import React, { useRef, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import {
  LocationOn,
  Email,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import "../assets/Contact.css";

const ContactSection = () => {
  const topRef = useRef(null);
  const messageRef = useRef(null);

  // On mount, open the envelope and perform the initial "pull" animation.
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Initial animation: open envelope and pull card.");
      topRef.current?.classList.add("open");
      messageRef.current?.classList.add("pull");
      document.querySelector(".frame")?.classList.add("show");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // On form submission:
  // 1. Remove the "pull" animation and add the "enter" animation to move the card.
  // 2. Then wait for the animation to finish before closing the envelope.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted – starting card enter animation.");

    // Remove initial pull animation if it exists and start the enter animation.
    messageRef.current?.classList.remove("pull");
    // Force reflow (if needed)
    void messageRef.current.offsetWidth;
    messageRef.current?.classList.add("enter");

    // Listen for the animation end event
    const onAnimationEnd = () => {
      console.log("Card animation ended – closing envelope.");
      topRef.current?.classList.remove("open");
      topRef.current?.classList.add("closed");
      // Remove the event listener after the animation completes
      messageRef.current?.removeEventListener("animationend", onAnimationEnd);
    };

    messageRef.current?.addEventListener("animationend", onAnimationEnd);
  };

  return (
    <Box sx={{ px: 4, py: 8, mt: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 6, fontWeight: "bold", color: "black" }}
      >
        Contact Us
      </Typography>
      <Grid
        container
        spacing={6}
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* Left Column - Envelope and Form */}
        <Grid item xs={12} md={6} className="col-message">
          <Box className="frame">
            <div className="message" ref={messageRef}>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" Name Surname*"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" Email* "
                  required
                />
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder=" Phone (optional)"
                />
                <textarea
                  name="message"
                  id="messarea"
                  placeholder=" Message* "
                  required
                />
                <input type="submit" value="Send" id="send" />
              </form>
            </div>

            <div className="bottom"></div>
            <div className="left"></div>
            <div className="right"></div>
            <div className="top" ref={topRef}></div>
          </Box>
        </Grid>

        {/* Right Column - Contact Information */}
        <Grid item xs={12} md={5} className="col-location">
          <Card elevation={4} sx={{ borderRadius: 4 }}>
            <CardContent>
              <Stack spacing={2} mt={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <CiLocationOn fontSize="large" />
                  <Typography>123 Green Lane, Nature City</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <TfiEmail color="primary" />
                  <Typography>contact@greenworld.com</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <BsTelephone color="primary" />
                  <Typography>+1 234 567 890</Typography>
                </Stack>
              </Stack>
              <Divider sx={{ my: 3 }} />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.0767083608!2d-74.30915277037441!3d40.6966726870191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2sge!4v1744505672793!5m2!1str!2sge"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="New York Map"
              />

              <Divider sx={{ my: 3 }} />

              <Stack direction="row" spacing={2} justifyContent="center">
                <IconButton
                  href="#"
                  target="_blank"
                  sx={{ color: "black", fontSize: 20 }}
                >
                  <FiFacebook />
                </IconButton>
                <IconButton
                  href="#"
                  target="_blank"
                  sx={{ color: "black", fontSize: 20 }}
                >
                  <FaXTwitter />
                </IconButton>
                <IconButton
                  href="#"
                  target="_blank"
                  sx={{ color: "black", fontSize: 20 }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  href="#"
                  target="_blank"
                  sx={{ color: "black", fontSize: 20 }}
                >
                  <FaLinkedinIn />
                </IconButton>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
