// src/components/OurBlogs.jsx
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/Blog.css";

const works = [
  {
    id: 5,
    title: "Proje 5",
    description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://i.pinimg.com/originals/4a/78/63/4a786398530c084d3bb8b5ad1af4cab0.png",
  },

  {
    id: 4,
    title: "Proje 4",
    description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://www.pngitem.com/pimgs/m/585-5852486_bpo-call-center-animation-hd-png-download.png",
  },
  {
    id: 3,
    title: "Proje 3",
    description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://www.dpedijital.com/wp-content/uploads/2020/01/Screenshot_41.png",
  },
  {
    id: 2,
    title: "Proje 2",
    description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://i.pinimg.com/originals/4a/78/63/4a786398530c084d3bb8b5ad1af4cab0.png",
  },
  {
    id: 1,
    title: "Proje 1",
    description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image:
      "https://www.pngitem.com/pimgs/m/585-5852486_bpo-call-center-animation-hd-png-download.png",
  },
];

const OurBlogs = ({ themeMode }) => {
  const { pathname } = useLocation();
  const isBlogPage = pathname === "/blog" || pathname === "/blogs";
  const displayedWorks = isBlogPage ? works : works.slice(-3);

  // scroll to top whenever this section mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="our-works">
      <h2 className="section-title">Our Blogs</h2>
      <h4 className="title-h4">Lorem, ipsum dolor.</h4>

      <div className={`works-grid ${isBlogPage ? "blog-page" : "main-page"}`}>
        {displayedWorks.map((work, idx) => {
          const isFeatured =
            !isBlogPage && displayedWorks.length === 3 && idx === 1;
          return (
            <div
              key={work.id}
              className={`work-card ${isFeatured ? "featured" : ""}`}
            >
              <div className="card-image">
                <img src={work.image} alt={work.title} />
              </div>
              <div className="card-info">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <Link to={`/blog/${work.id}`} className="read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurBlogs;
