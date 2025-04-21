import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/Carousel.css";

import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";

const initialItems = [
  {
    id: 1,
    img: img1,
    introTitle: "DESIGN SLIDER",
    topic: "Aerphone",
    introDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
  },
  {
    id: 2,
    img: img2,
    introTitle: "DESIGN SLIDER",
    topic: "Aerphone",
    introDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
  },
  {
    id: 3,
    img: img3,
    introTitle: "DESIGN SLIDER",
    topic: "Aerphone",
    introDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
  },
  {
    id: 4,
    img: img4,
    introTitle: "DESIGN SLIDER",
    topic: "Aerphone",
    introDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
  },
  {
    id: 5,
    img: img5,
    introTitle: "DESIGN SLIDER",
    topic: "Aerphone",
    introDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
  },
  {
    id: 6,
    img: img6,
    introTitle: "DESIGN SLIDER",
    topic: "Aerphone",
    introDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
  },
];

const Carousel = () => {
  const [items, setItems] = useState(initialItems);
  const [mode, setMode] = useState(""); // '', 'next', 'prev'
  const [disableClick, setDisableClick] = useState(false);

  const resetMode = () => setMode("");

  const handleNext = () => {
    if (disableClick) return;
    setDisableClick(true);
    setMode("next");
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const first = newItems.shift();
      newItems.push(first);
      return newItems;
    });
    setTimeout(() => {
      resetMode();
      setDisableClick(false);
    }, 2000);
  };

  const handlePrev = () => {
    if (disableClick) return;
    setDisableClick(true);
    setMode("prev");
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const last = newItems.pop();
      newItems.unshift(last);
      return newItems;
    });
    setTimeout(() => {
      resetMode();
      setDisableClick(false);
    }, 2000);
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      if (!disableClick) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(autoPlay);
  }, [disableClick]);

  return (
    <div className={`carousel ${mode}`}>
      <div className="arrows">
        <button id="prev" onClick={handlePrev} disabled={disableClick}>
          &lt;
        </button>
        <button id="next" onClick={handleNext} disabled={disableClick}>
          &gt;
        </button>
      </div>
      <div className="list">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt={`Slide ${item.id}`} />
            <div className="introduce">
              <div className="title">{item.introTitle}</div>
              <div className="topic" sx={{ mt: 25 }}>
                {item.topic}
              </div>
              <div className="des">{item.introDesc}</div>
              <div className="buttons-main">
                <Link to="/contact" className="Btn-Slider">
                  Contact Us
                </Link>
                <Link to="/about" className="Btn-Slider">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
