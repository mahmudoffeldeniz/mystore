import React, { useState, useEffect } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Breadcrumbs,
  Link,
  Alert,
  CircularProgress,
  Button,
  Grid,
  Box,
} from "@mui/material";

const works = [
  {
    id: 5,
    title: "Project 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi eveniet exercitationem est ipsa, expedita recusandae, inventore cum provident sequi molestias voluptatem perspiciatis ducimus alias, labore itaque. Vitae, ratione quia sunt quasi reiciendis quis provident perferendis rerum hic debitis doloremque repellat repudiandae ipsa magni consequuntur quae. Minima dolores atque perferendis!",
    image:
      "https://i.pinimg.com/originals/4a/78/63/4a786398530c084d3bb8b5ad1af4cab0.png",
    content: [
      "The first paragraph of Project 5 discusses cutting-edge technologies.",
      "The second paragraph elaborates on frontend frameworks.",
      "The third paragraph explains integration with backend services.",
    ],
    author: "Admin",
    date: "2024-04-01",
  },
  {
    id: 4,
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi eveniet exercitationem est ipsa, expedita recusandae, inventore cum provident sequi molestias voluptatem perspiciatis ducimus alias, labore itaque. Vitae, ratione quia sunt quasi reiciendis quis provident perferendis rerum hic debitis doloremque repellat repudiandae ipsa magni consequuntur quae. Minima dolores atque perferendis!",
    image:
      "https://www.pngitem.com/pimgs/m/585-5852486_bpo-call-center-animation-hd-png-download.png",
    content: ["Detailed overview of Project 4 in visual communication."],
    author: "Admin",
    date: "2024-03-28",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi eveniet exercitationem est ipsa, expedita recusandae, inventore cum provident sequi molestias voluptatem perspiciatis ducimus alias, labore itaque. Vitae, ratione quia sunt quasi reiciendis quis provident perferendis rerum hic debitis doloremque repellat repudiandae ipsa magni consequuntur quae. Minima dolores atque perferendis!",
    image:
      "https://www.dpedijital.com/wp-content/uploads/2020/01/Screenshot_41.png",
    content: "This project focuses on mobile-first approach design strategies.",
    author: "Editor",
    date: "2024-03-25",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi eveniet exercitationem est ipsa, expedita recusandae, inventore cum provident sequi molestias voluptatem perspiciatis ducimus alias, labore itaque. Vitae, ratione quia sunt quasi reiciendis quis provident perferendis rerum hic debitis doloremque repellat repudiandae ipsa magni consequuntur quae. Minima dolores atque perferendis!",
    image:
      "https://i.pinimg.com/originals/4a/78/63/4a786398530c084d3bb8b5ad1af4cab0.png",
    content: ["Insights into user behavior and UI improvements."],
    author: "Editor",
    date: "2024-03-20",
  },
  {
    id: 1,
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi eveniet exercitationem est ipsa, expedita recusandae, inventore cum provident sequi molestias voluptatem perspiciatis ducimus alias, labore itaque. Vitae, ratione quia sunt quasi reiciendis quis provident perferendis rerum hic debitis doloremque repellat repudiandae ipsa magni consequuntur quae. Minima dolores atque perferendis!",
    image:
      "https://www.pngitem.com/pimgs/m/585-5852486_bpo-call-center-animation-hd-png-download.png",
    content: "Single paragraph content related to user support systems.",
    author: "Admin",
    date: "2024-03-15",
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const blog = works.find((item) => item.id.toString() === id);
    if (!blog) {
      setError("Post not found");
    } else {
      setPost(blog);
      const relatedPosts = works
        .filter((item) => item.id.toString() !== id)
        .slice(0, 3);
      setRelated(relatedPosts);
      setError(null);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ textAlign: "center", my: 5 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ my: 5 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Button variant="contained" component={RouterLink} to="/blog">
          Back to Blogs
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ my: 5 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/" underline="hover" color="inherit">
          Home
        </Link>
        <Link
          component={RouterLink}
          to="/blog"
          underline="hover"
          color="inherit"
        >
          Blog
        </Link>
        <Typography color="text.primary">{post.title}</Typography>
      </Breadcrumbs>

      {/* Main Blog Content */}
      <Card sx={{ my: 3, borderRadius: 2, boxShadow: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              image={post.image}
              alt={post.title}
              sx={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px 0 0 8px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {post.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ maxWidth: 550 }}
                gutterBottom
              >
                {post.description}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                {new Date(post.date).toLocaleDateString()} | By {post.author}
              </Typography>
              {Array.isArray(post.content) ? (
                post.content.map((para, idx) => (
                  <Typography key={idx} paragraph>
                    {para}
                  </Typography>
                ))
              ) : (
                <Typography paragraph>{post.content}</Typography>
              )}
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      {/* Related Posts */}
      <Typography variant="h5" sx={{ mt: 6, mb: 3 }}>
        Related Posts
      </Typography>
      <Grid container spacing={4}>
        {related.map((r) => (
          <Grid item xs={12} sm={6} md={4} key={r.id}>
            <Card
              component={RouterLink}
              to={`/blog/${r.id}`}
              sx={{
                textDecoration: "none",
                color: "inherit",
                border: "1px solid #ddd",
                borderRadius: 2,
                boxShadow: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                objectFit: "cover",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={r.image}
                alt={r.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom noWrap>
                  {r.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: 200,
                  }}
                >
                  {r.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Back Button */}
      <Box textAlign="center">
        <Button
          className="btn"
          variant="outlined"
          component={RouterLink}
          to="/blog"
          sx={{ mt: 6 }}
        >
          ← Back to All Blogs
        </Button>
      </Box>
    </Container>
  );
}
