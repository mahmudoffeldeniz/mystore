import React from "react";
import "../assets/About.css";
import BrandCarousel from "../Components/Brands";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";

const About = () => {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("xll"));

  const Wrapper = ({ children }) =>
    isWideScreen ? (
      <Container maxWidth="sm">{children}</Container>
    ) : (
      <Box px={2}>{children}</Box>
    );

  return (
    <div className="about-page">
      <header className="hero">
        <h1>About Our Company</h1>
      </header>

      <Wrapper>
        <section className="our-story">
          <div className="story-image">
            <img
              src="https://t3.ftcdn.net/jpg/05/39/65/40/360_F_539654005_M7XZRGAG3TAarymgapSSgSUdgkNKQL2G.jpg"
              alt="Our Story"
            />
          </div>
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, our company has grown from a small startup into a
              creative powerhouse. We have continuously pushed boundaries to
              develop innovative products and experiences that make a
              difference. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus aliquam nulla officiis praesentium laborum
              error optio ut quibusdam dicta, ducimus voluptatum beatae
              similique sequi ratione, facere obcaecati veniam, autem fuga
              earum. Minus necessitatibus nostrum, numquam consequatur
              cupiditate deserunt saepe vel odio. Sint laboriosam et, fugit
              nihil enim eius non doloribus illo a quibusdam porro nulla id
              tempora aliquid quia laborum. Iusto explicabo, atque ex sequi et
              labore? Dolore, commodi esse.
            </p>
          </div>
        </section>

        <section className="our-mission">
          <div className="story-content">
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              delectus harum eum sunt. Dolorem, id quo laudantium minus autem
              maxime dignissimos? Similique, minima! Amet, aliquid perspiciatis!
              Inventore enim distinctio nemo, esse quam unde harum cupiditate
              porro iste. Minima quibusdam voluptas explicabo hic vero nemo
              dolorem eligendi enim at? Perferendis esse voluptatum non sit vero
              aperiam harum repudiandae ipsam, fuga nemo. Quis quam recusandae
              alias quidem quo earum cupiditate necessitatibus reprehenderit
              laborum dolor, iste cum quisquam dolores cumque ipsam. Quis rerum,
              optio exercitationem minima qui, quasi porro beatae nemo aperiam
              cum suscipit excepturi nam, quaerat dolore blanditiis quod fugit
              ad quia quibusdam consectetur ab fugiat! Ea atque, minus ad porro
              totam nisi ratione nobis repellendus quod itaque laboriosam soluta
              facilis expedita.
            </p>
          </div>
          <div className="story-image">
            <img
              src="https://avatars.mds.yandex.net/i?id=1a19f9935257ea0a9612951a51ad82284c092635-5356399-images-thumbs&n=13"
              alt="Our Story"
            />
          </div>
        </section>
      </Wrapper>

      <BrandCarousel />
    </div>
  );
};

export default About;
