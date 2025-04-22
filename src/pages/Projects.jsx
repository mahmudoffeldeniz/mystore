import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Projects.css";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";

export const posts = [
  {
    id: 1,
    title: "Is CDN Solutions Still Relevant?",
    excerpt:
      "In the fast-paced world of web development, performance is everything...",
    content:
      "In the fast-paced world of web development, performance is everything. Users expect lightning-fast, seamless experiences, and search engines reward optimized websites.",
    date: "Mar 23, 2025",
    images: [
      "https://emilandersson.com/storage/blog-thumbnails/01JQ1PMBK9TZ02ECBAMG4ZGWYF.webp",
      "https://picsum.photos/600/400?random=1",
      "https://picsum.photos/600/400?random=2",
    ],
  },
  {
    id: 2,
    title: "10 Best Web Development Stacks",
    excerpt:
      "When it comes to building a website, choosing the right web development stack is like...",
    content:
      "When it comes to building a website, choosing the right web development stack is like picking the best ingredients for your signature dish...",
    date: "Mar 22, 2025",
    images: [
      "https://emilandersson.com/storage/blog-thumbnails/01JPYS2JN0EAM6HDZ704MD17V8.webp",
      "https://picsum.photos/600/400?random=3",
      "https://picsum.photos/600/400?random=4",
    ],
  },
  {
    id: 3,
    title: "Laravel > GitHub > Hostinger",
    excerpt:
      "Setting up a Laravel development environment, managing your code with GitHub, and deploying it effortlessly through Hostinger can sound daunting...",
    content:
      "Setting up a Laravel development environment, managing your code with GitHub, and deploying it effortlessly through Hostinger doesn’t have to be complicated. In this guide, we walk through each step...",
    date: "Mar 18, 2025",
    images: [
      "https://media.istockphoto.com/id/2171171871/photo/hispanic-latin-american-software-engineer-developer-use-laptop-computer-program-coding.jpg?s=612x612&w=0&k=20&c=B5vzo3rJakox1ZXxuObw38Vx2eV-f7YXJdIGv1AkKIg=",
      "https://picsum.photos/600/400?random=5",
      "https://picsum.photos/600/400?random=6",
    ],
  },
  {
    id: 4,
    title: "React vs Vue vs Angular",
    excerpt:
      "Choosing a front-end framework is tough. In this post, we compare React, Vue, and Angular with real-world pros and cons to help you decide...",
    content:
      "React, Vue, and Angular each have strengths and trade-offs. We dive into performance benchmarks, developer experience, and ecosystem support so you can pick the one that suits your needs...",
    date: "Mar 15, 2025",
    images: [
      "https://media.istockphoto.com/id/690670100/photo/young-woman-and-man-sitting-at-computers.jpg?s=612x612&w=0&k=20&c=G3jk1v_Oaikh54zfVzrQU6LnaBMVJaiRYiUw6H_8Cdk=",
      "https://picsum.photos/600/400?random=7",
      "https://picsum.photos/600/400?random=8",
    ],
  },
  {
    id: 5,
    title: "The Future of Web Design",
    excerpt:
      "What will websites look like in 2030? We explore emerging trends like AI-generated layouts, headless CMS, and ultra-personalized experiences...",
    content:
      "The web is evolving rapidly. From voice interfaces to AR/VR integration, discover what the future holds for web designers and developers...",
    date: "Mar 10, 2025",
    images: [
      "https://media.istockphoto.com/id/1137393419/photo/young-woman-using-laptop-at-a-cafe.jpg?s=612x612&w=0&k=20&c=3a6A22HUgSzGqY38jPBIvqrc9clh_2c0JzjuzO4UekE=",
      "https://picsum.photos/600/400?random=9",
      "https://picsum.photos/600/400?random=10",
    ],
  },
  {
    id: 6,
    title: "Simple Hosting with Netlify",
    excerpt:
      "Deploying a website should be easy. Learn how to launch your static site on Netlify in under 5 minutes...",
    content:
      "We walk through Netlify’s drag-and-drop deploy, continuous integration with Git, and custom domain setup so you can go from code to live site in record time...",
    date: "Mar 05, 2025",
    images: [
      "https://www.artonicweb.com/wp-content/uploads/2024/08/artonic-web-professional-photos-for-my-website-600x401.jpg",
      "https://picsum.photos/600/400?random=11",
      "https://picsum.photos/600/400?random=12",
    ],
  },
];

/**
 * @param {{ count?: number }} props
 * Eğer `count` prop'u varsa sadece ilk `count` adedi gösterir, yoksa tüm postlar
 */
export default function Projects({ count }) {
  const theme = useTheme();
  // xl ve üstü true, lg ve altı false
  const isWideScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const [hoveredId, setHoveredId] = useState(null);
  const displayPosts =
    typeof count === "number" ? posts.slice(0, count) : posts;

  // Ultra geniş ekranlarda Container, diğerlerinde Box kullan
  const Wrapper = ({ children }) =>
    isWideScreen ? (
      <Container maxWidth="xl">{children}</Container>
    ) : (
      <Box px={2}>{children}</Box>
    );

  return (
    <Wrapper>
      <section className="front-blog">
        <div className="content-container">
          <h2 className="Projecttitle">Our Projects</h2>
          <div className="front-blog-list">
            {displayPosts.map((post) => (
              <Link
                key={post.id}
                to={`/projects/${post.id}`}
                className="front-blog-item article-blog"
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="front-blog-item-thumbnail article__thumbnail"
                  style={{
                    backgroundImage: `url('${post.images[0]}')`,
                    opacity: hoveredId && hoveredId !== post.id ? 0.5 : 1,
                  }}
                />
                <div className="front-blog-item-content article__body">
                  <h3 className="article__title">{post.title}</h3>
                  <p className="article__excerpt">{post.excerpt}</p>
                  <footer className="article__footer">
                    <span className="article__date">{post.date}</span>
                    <div className="footer__readmore">
                      <span className="footer__readmore-text">Read more</span>
                      <span className="footer__readmore-arrow">
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </footer>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
