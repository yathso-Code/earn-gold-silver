import React, { useState } from "react";
import "./Blog.css";

const blogs = [
  {
    id: 1,
    title: "Investing in Gold",
    desc: "Learn how gold investment can secure your financial future with stability and growth.",
    img: "/image/blog/a.jpg"
  },
  {
    id: 2,
    title: "Silver as an Asset",
    desc: "Discover why silver is an affordable yet powerful investment option for everyone.",
    img: "/image/blog/b.jpg"
  },
  {
    id: 3,
    title: "Smart Savings",
    desc: "Tips to diversify your portfolio with precious metals for long-term success.",
    img: "/image/blog/c.jpg"
  },
  {
    id: 4,
    title: "Wealth Building",
    desc: "Explore how strategic savings can transform your long-term wealth.",
    img: "/image/blog/d.jpg"
  }
];

const Blog = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === blogs.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? blogs.length - 1 : current - 1);
  };

  return (
    <div className="blog_section">
      <h1 className="section_title">Our Blog</h1>
      <div className="slider_container">
        <div className="blog_card">
          <img src={blogs[current].img} alt={blogs[current].title} />
          <div className="card_content">
            <h2>{blogs[current].title}</h2>
            <p>{blogs[current].desc}</p>
            <button className="read_more">Read More</button>
          </div>

          {/* ✅ Arrows inside bottom of card */}
          <div className="nav_buttons">
            <button className="prev" onClick={prevSlide}>&#10094; Prev</button>
            <button className="next" onClick={nextSlide}>Next &#10095;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
