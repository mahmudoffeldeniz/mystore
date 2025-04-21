import React from "react";
import Carousel from "../Components/Carousel";
import { Link } from "react-router-dom";
import "../assets/Home.css";
import Brands from "../Components/Brands";
import Products from "../pages/Products";
import Blog from "../pages/Blog";
import OurService from "../Components/OurService";
import ProjectPage from "./Projects";
import { Button, Box } from "@mui/material";
function Home() {
  return (
    <div>
      <Carousel />
      <Brands />

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
              solutions that transform experiences. Our creativity drives us to
              challenge the norm and deliver excellence.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              assumenda eum autem ducimus, voluptatum accusantium, a itaque eius
              excepturi, exercitationem officia nostrum natus alias magni soluta
              quo nesciunt beatae quasi aliquam odit delectus dignissimos nemo
              neque maiores. Eius sed neque praesentium rerum reprehenderit
              aperiam exercitationem obcaecati impedit, explicabo suscipit dolor
              excepturi maiores dolores quam sapiente repellendus pariatur a.
              Laborum et maxime quia. Ut pariatur explicabo atque quos culpa aut
              eos.
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
    </div>
  );
}

export default Home;
