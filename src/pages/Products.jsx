import React, { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../features/productSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  IconButton,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Pagination,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const categories = [
  "All",
  "Monitor",
  "TV & Displays",
  "Laptops",
  "Phones",
  "Tablets",
  "Smartwatches",
  "Cameras",
  "Gaming Consoles",
  "PC Components",
  "Phone Accessories",
  "Storage Devices (USB, SSD, HDD)",
];

const ProductPage = () => {
  const products = useSelector(selectProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();
  const navigate = useNavigate();
  const isProductPage = location.pathname === "/products";

  // Scroll to top when page changes on product page
  useEffect(() => {
    if (isProductPage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage, isProductPage]);

  const categoryCounts = useMemo(() => {
    const counts = products.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});
    return { All: products.length, ...counts };
  }, [products]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setVisibleCount(6);
    setCurrentPage(1);
  };

  const filtered = products.filter((p) =>
    selectedCategory === "All" ? true : p.category === selectedCategory
  );

  const itemsPerPage = isProductPage ? 12 : visibleCount;
  const start = isProductPage ? (currentPage - 1) * itemsPerPage : 0;
  const toDisplay = filtered.slice(start, start + itemsPerPage);

  const totalPages = isProductPage ? Math.ceil(filtered.length / 12) : 0;

  const handleViewMore = () => {
    if (!isProductPage) {
      navigate("/products");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      {/* Sidebar */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: 300,
          ml: 2,
          borderRight: "1px solid #ccc",
          p: 2,
        }}
      >
        <Typography variant="h6" mb={2} sx={{ color: "black" }}>
          Categories
        </Typography>
        <List>
          {categories.map((cat) => (
            <ListItemButton
              key={cat}
              selected={selectedCategory === cat}
              onClick={() => handleCategorySelect(cat)}
              sx={{ borderRadius: 1, mb: 1 }}
            >
              <ListItemText primary={`${cat} (${categoryCounts[cat] || 0})`} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box sx={{ flex: 1 }}>
        {/* Mobile categories */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            overflowX: "auto",
            gap: 2,
            px: 2,
            py: 1,
            mt: 5,
          }}
        >
          {categories.map((cat) => (
            <Box
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              sx={{
                cursor: "pointer",
                flexShrink: 0,
                borderBottom:
                  selectedCategory === cat ? "2px solid #1976d2" : "none",
                pb: 0.5,
              }}
            >
              <Typography variant="button">
                {`${cat} (${categoryCounts[cat] || 0})`}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Product Grid */}
        <Box sx={{ maxWidth: 1200, mx: "auto", p: { xs: 2, md: 3 } }}>
          <Grid container spacing={6} justifyContent="center">
            {toDisplay.length === 0 ? (
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  width: "100%",
                  margin: "auto",
                  alignItems: "center",
                  lineHeight: "50%",
                }}
              >
                No products found
              </Typography>
            ) : (
              toDisplay.map((product) => {
                const thumb = product.images?.[0] || "";
                return (
                  <Grid key={product.id} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Card
                      className="card"
                      sx={{
                        position: "relative",
                        borderRadius: 3,
                        overflow: "visible",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                          "& .product-image": {
                            transform: "scale(1.2) translateY(-10px)",
                          },
                        },
                        height: 350,
                        width: 260,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{ width: "100%", height: 180, overflow: "visible" }}
                      >
                        <CardMedia
                          component="img"
                          image={thumb}
                          alt={product.name}
                          className="product-image"
                          sx={{
                            width: "100%",
                            height: "200px",
                            p: 0.5,
                            objectFit: "contain",
                            transition: "transform 0.4s ease",
                            transform: "scale(0.8)",
                            zIndex: 2,
                            position: "relative",
                          }}
                        />
                      </Box>
                      <CardContent sx={{ textAlign: "center" }}>
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          noWrap
                        >
                          {product.name}
                        </Typography>
                        <Rating
                          name="product-rating"
                          value={product.rating}
                          precision={0.5}
                          readOnly
                          sx={{ fontSize: "1.2rem", my: 1 }}
                        />
                        <Typography
                          variant="h6"
                          color="primary"
                          fontWeight="bold"
                        >
                          {product.price.toFixed(2)}€
                        </Typography>
                        {/* Always show detail button */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 2,
                          }}
                        >
                          <IconButton
                            component={Link}
                            to={`/products/${product.id}`}
                            color="primary"
                            aria-label="view details"
                            sx={{
                              backgroundColor: "#f5f5f5",
                              "&:hover": { backgroundColor: "#ddd" },
                            }}
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })
            )}
          </Grid>

          {/* View More or Pagination */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            {!isProductPage
              ? visibleCount < filtered.length && (
                  <Button
                    className="view-btn btn"
                    variant="contained"
                    onClick={handleViewMore}
                  >
                    View More
                  </Button>
                )
              : totalPages > 1 && (
                  <Stack spacing={2} alignItems="center">
                    <Pagination
                      count={totalPages}
                      page={currentPage}
                      onChange={(e, page) => setCurrentPage(page)}
                      className="pass-page-btn"
                    />
                  </Stack>
                )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
