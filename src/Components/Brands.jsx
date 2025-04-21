import React, { useRef, useState, useEffect } from "react";
import "../assets/Brands.css";

const brands = [
  {
    id: 1,
    name: "Brand 1",
    logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162618/1533-768x591.png",
  },
  {
    id: 2,
    name: "Brand 2",
    logo: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/32707/item-list-card/TechLogos19_copy.jpg",
  },
  {
    id: 3,
    name: "Brand 3",
    logo: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162614/1433.png",
  },
  {
    id: 4,
    name: "Brand 4",
    logo: "https://www.webguru-india.com/blog/wp-content/uploads/2023/01/Layering-2.jpg",
  },
  {
    id: 5,
    name: "Brand 5",
    logo: "https://i1.wp.com/static.free-logo-design.net/uploads/2011/12/Free_Technology_Logo_Design.jpg",
  },
  {
    id: 6,
    name: "Brand 6",
    logo: "https://cdn.dribbble.com/userupload/7020341/file/original-902e79ace6a78aec23d162c340f76a3a.jpg?format=webp&resize=400x300&vertical=center",
  },
  {
    id: 7,
    name: "Brand 7",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XoMN9GhDzJM8nvU58X4ieexSsj68_is9vg&s",
  },
  {
    id: 8,
    name: "Brand 8",
    logo: "https://atd-bloges.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/06/30133705/18-37.webp",
  },
];

const BrandCarousel = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [initialScroll, setInitialScroll] = useState(0);

  // Ölçüm: track’in ilk (orijinal) setinin genişliğini hesaplayıp CSS değişkenine atıyoruz
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      // Orijinal eleman seti: ilk yarı
      const halfCount = track.children.length / 2;
      let width = 0;
      for (let i = 0; i < halfCount; i++) {
        width += track.children[i].offsetWidth;
      }
      track.style.setProperty("--original-width", `${width}px`);
    }
  }, []);

  const onDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.pageX || e.touches[0].pageX;
    setDragStartX(clientX);
    setInitialScroll(containerRef.current.scrollLeft);
    // Animasyonu duraklat
    containerRef.current.classList.add("paused");
  };

  const onDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.pageX || e.touches[0].pageX;
    const delta = clientX - dragStartX;
    containerRef.current.scrollLeft = initialScroll - delta;
  };

  const onDragEnd = () => {
    setIsDragging(false);
    // Animasyonu yeniden başlat
    containerRef.current.classList.remove("paused");
  };

  return (
    <div
      className="carousel-container"
      ref={containerRef}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onDragMove}
      onTouchEnd={onDragEnd}
    >
      <div className="carousel-track" ref={trackRef}>
        {brands.map((brand) => (
          <div className="carousel-slide" key={brand.id}>
            <img src={brand.logo} alt={brand.name} className="brand-image" />
          </div>
        ))}
        {/* Klonlanmış elemanlar: sonsuz döngü için */}
        {brands.map((brand) => (
          <div className="carousel-slide" key={`clone-${brand.id}`}>
            <img src={brand.logo} alt={brand.name} className="brand-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
