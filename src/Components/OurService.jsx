import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import "../assets/Service.css";

const services = [
  {
    title: "UI/UX Creative Design",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Visual Graphic Design",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Strategy & Digital Marketing",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Effective Business Growth",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Effective Business Growth",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Effective Business Growth",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <Box className="svc-container">
      <Typography className="svc-subtitle">Service</Typography>{" "}
      <Grid container spacing={4} className="svc-grid">
        {services.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card className={`svc-card svc-card-${index + 1}`}>
              <div
                className="svc-card-bg"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <CardContent className="svc-card-content">
                <Typography variant="h5" className="svc-card-title">
                  {item.title}
                </Typography>
                <Typography variant="body2" className="svc-card-description">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
