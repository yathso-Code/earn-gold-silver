import React from "react";
import "./NotFound.css"; // import CSS file
import "@fortawesome/fontawesome-free/css/all.min.css"; // fontawesome

const NotFound = () => {
  return (
  
    <div className="container">
      <div className="gif">
        <img
          src="https://i.postimg.cc/2yrFyxKv/giphy.gif"
          alt="404 Not Found"
        />
      </div>
      <div className="content">
        <h1 className="main-heading">This page is gone.</h1>
        <p>
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <a href="/">
          <button>
            Back to home <i className="far fa-hand-point-right"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
