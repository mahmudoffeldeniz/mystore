import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link as RouterLink } from "react-router-dom";
import { selectProducts } from "../features/productSlice";

import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Rating,
  Breadcrumbs,
  Link as MUILink,
  IconButton,
  Chip,
  Card,
  CardMedia,
  CardContent,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { styled } from "@mui/material/styles";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import ZoomableImage from "./ZoomableImage";
import Slider from "react-slick";

import "../assets/ProductDetailPage.css";

// Styled Carousel Arrows
const ArrowButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  backgroundColor: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  "&:hover": { backgroundColor: "#f5f5f5" },
}));
function NextArrow({ onClick }) {
  return (
    <ArrowButton onClick={onClick} sx={{ right: -16 }} aria-label="next">
      <ChevronRight />
    </ArrowButton>
  );
}
function PrevArrow({ onClick }) {
  return (
    <ArrowButton onClick={onClick} sx={{ left: -16 }} aria-label="prev">
      <ChevronLeft />
    </ArrowButton>
  );
}

const ProductDetailPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { id } = useParams();
  const products = useSelector(selectProducts);
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Container sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h6">Product not found</Typography>
      </Container>
    );
  }

  const [mainImage, setMainImage] = useState("");
  useEffect(() => {
    if (product.images?.length) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  const recentProducts = products
    .filter((p) => p.id !== product.id)
    .slice(-8)
    .reverse();

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 960, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 400, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Product Info */}
      <Paper elevation={2} sx={{ p: 3, mb: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className="main-image-wrapper">
              {isMobile ? (
                <img
                  src={mainImage}
                  alt={product.name}
                  style={{ width: 350, height: 250, objectFit: "contain" }}
                />
              ) : (
                <ZoomableImage
                  src={mainImage}
                  zoomScale={2}
                  lensSize={120}
                  resultSize={300}
                />
              )}
            </Box>
            <Box className="thumbnail-list">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name}-thumb-${idx}`}
                  className={img === mainImage ? "thumb active" : "thumb"}
                  onClick={() => setMainImage(img)}
                  style={{
                    border:
                      img === mainImage
                        ? "2px solid #1976d2"
                        : "2px solid #ccc",
                  }}
                />
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <Rating value={product.rating} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                ({product.rating})
              </Typography>
            </Box>
            <Box display="flex" alignItems="baseline" mb={3}>
              <Typography variant="h5" color="error" sx={{ mr: 2 }}>
                ${(product.price * 0.9).toFixed(2)}
              </Typography>
              <Typography variant="body1" className="original-price">
                ${product.price.toFixed(2)}
              </Typography>
              <Chip label="10% Off" color="secondary" sx={{ ml: 2 }} />
            </Box>
            <Box mb={3}>
              <Button
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                sx={{ mr: 2 }}
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                startIcon={<FavoriteBorderIcon />}
                sx={{ mr: 2 }}
              >
                Add to Wishlist
              </Button>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" mb={1}>
              Sold by{" "}
              <MUILink component={RouterLink} to="#" underline="hover">
                Trendyol Seller
              </MUILink>
            </Typography>
            <Typography variant="body2">
              Estimated Delivery: <strong>2–4 business days</strong>
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Recently Viewed */}
      <Box mt={6} className="recent-carousel">
        <Typography variant="h6" gutterBottom>
          Recently Viewed
        </Typography>
        <Slider {...carouselSettings}>
          {recentProducts.map((rp) => (
            <Card
              key={rp.id}
              component={RouterLink}
              to={`/products/${rp.id}`}
              sx={{
                m: 1,
                borderRadius: 2,
                boxShadow: 3,
                textDecoration: "none",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <CardMedia
                component="img"
                image={rp.images[0]}
                alt={rp.name}
                sx={{
                  height: 140,
                  objectFit: "contain",
                  bgcolor: "#fafafa",
                  p: 1,
                }}
              />
              <CardContent>
                <Typography variant="body2" noWrap>
                  {rp.name}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  ${rp.price.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default ProductDetailPage;
