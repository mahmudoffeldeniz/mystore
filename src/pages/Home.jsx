import React from "react";
import Carousel from "../Components/Carousel";
import Brands from "../Components/Brands";
import Products from "../pages/Products";
import Blog from "../pages/Blog";
import OurService from "../Components/OurService";
import ProjectPage from "./Projects";
import { Link } from "react-router-dom";
import { Button, Box, Container, useMediaQuery, useTheme } from "@mui/material";
import "../assets/Home.css";
function Home() {
  const theme = useTheme();
  // xl ve üstü true, lg ve altı false
  const isWideScreen = useMediaQuery(theme.breakpoints.up("xl"));

  const ContentWrapper = ({ children }) => {
    return isWideScreen ? (
      <Container maxWidth="xl">{children}</Container>
    ) : (
      // px veya mx değerlerini ihtiyaçınıza göre ayarlayın
      <Box px={2}>{children}</Box>
    );
  };

  return (
    <div>
      <Carousel />
      <Brands />

      {/* Burada sarıyoruz */}
      <ContentWrapper>
        <section className="about-section">
          <div className="container">
            <div className="image-side">
              <img
                src="https://cdn.moneymarketing.co.uk/content/uploads/2019/04/17104015/12-13-investment.jpg"
                alt="About Us"
              />
            </div>
            <div className="text-side">
              <h2>Who We Are</h2>
              <p>
                We are passionate innovators dedicated to creating unique
                solutions that transform experiences. Our creativity drives us
                to challenge the norm and deliver excellence.
                <br />
                Lorem ipsum…
              </p>
              <Link to="/about" className="more-btn btn">
                See More
              </Link>
            </div>
          </div>
        </section>
        <br />
        <Products />
        <OurService />
        <ProjectPage count={3} />
        <Box display="flex" justifyContent="center" mt={8}>
          <Button
            component={Link}
            to="/projects"
            variant="outlined"
            sx={{ textTransform: "none" }}
            className="btn-project"
          >
            View Projects
          </Button>
        </Box>
        <Blog />
      </ContentWrapper>
    </div>
  );
}

export default Home;
