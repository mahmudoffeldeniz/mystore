import React, { useRef } from "react";
import { Box } from "@mui/material";
import "../assets/ZoomableImage.css";

const ZoomableImage = ({
  src,
  zoomScale = 2,
  lensSize = 100,
  resultSize = 300,
}) => {
  const containerRef = useRef(null);
  const lensRef = useRef(null);
  const resultRef = useRef(null);

  const showZoom = () => {
    lensRef.current.style.display = "block";
    resultRef.current.style.display = "block";
    // set background
    resultRef.current.style.backgroundImage = `url(${src})`;
  };

  const hideZoom = () => {
    lensRef.current.style.display = "none";
    resultRef.current.style.display = "none";
  };

  const onMouseMove = (e) => {
    const container = containerRef.current;
    const lens = lensRef.current;
    const result = resultRef.current;
    const rect = container.getBoundingClientRect();

    // coordinates relative to container
    let x = e.clientX - rect.left - lensSize / 2;
    let y = e.clientY - rect.top - lensSize / 2;

    // clamp
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > rect.width - lensSize) x = rect.width - lensSize;
    if (y > rect.height - lensSize) y = rect.height - lensSize;

    // move lens
    lens.style.left = `${x}px`;
    lens.style.top = `${y}px`;

    // background position for result
    const bgX = -x * zoomScale;
    const bgY = -y * zoomScale;
    result.style.backgroundPosition = `${bgX}px ${bgY}px`;

    // background size
    result.style.backgroundSize = `${rect.width * zoomScale}px ${
      rect.height * zoomScale
    }px`;
  };

  return (
    <Box
      className="zoom-container"
      ref={containerRef}
      onMouseEnter={showZoom}
      onMouseMove={onMouseMove}
      onMouseLeave={hideZoom}
      sx={{ width: "100%", position: "relative" }}
    >
      <img src={src} alt="" className="zoom-image" />
      <Box
        className="img-zoom-lens"
        ref={lensRef}
        sx={{ width: lensSize, height: lensSize }}
      />
      <Box
        className="img-zoom-result"
        ref={resultRef}
        sx={{ width: resultSize, height: resultSize }}
      />
    </Box>
  );
};

export default ZoomableImage;
