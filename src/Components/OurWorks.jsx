import React from "react";
import "../assets/OurWorks.css";

const works = [
  {
    id: 1,
    title: "Proje 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://i.pinimg.com/originals/4a/78/63/4a786398530c084d3bb8b5ad1af4cab0.png",
  },
  {
    id: 2,
    title: "Proje 2",
    description:
      "Nullam scelerisque leo nec nisi faucibus, sit amet vehicula odio aliquet.",
    image:
      "https://www.pngitem.com/pimgs/m/585-5852486_bpo-call-center-animation-hd-png-download.png",
  },
  {
    id: 3,
    title: "Proje 3",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    image:
      "https://www.dpedijital.com/wp-content/uploads/2020/01/Screenshot_41.png",
  },
  {
    id: 4,
    title: "Proje 4",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://i.pinimg.com/originals/01/fb/f7/01fbf7d7fe30a2f623233397a9e96c53.png",
  },
];

const OurWorks = ({ themeMode }) => {
  return (
    <section className="our-works">
      <h2 className="section-title">Our Services</h2>
      <h4 className="title-h4">Lorem, ipsum dolor.</h4>

      <div className="works-grid">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            <div className="card-image">
              <img src={work.image} alt={work.title} />
            </div>
            <div className="card-info">
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorks;
