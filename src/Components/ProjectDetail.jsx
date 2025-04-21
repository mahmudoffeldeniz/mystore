import React from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../pages/Projects";
import "../assets/ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <div className="content-container">Post not found</div>;

  return (
    <div className="post-detail-container content-container">
      <Link to="/projects" className="back-button">
        ← Back to Projects
      </Link>
      <div className="post-detail-header">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-date">Published on: {post.date}</p>
      </div>

      <div className="post-images">
        {post.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${post.title} image ${idx + 1}`}
            className="post-image"
          />
        ))}
      </div>

      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
