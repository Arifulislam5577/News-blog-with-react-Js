/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Moment from "react-moment";
import "moment-timezone";

const Blog = (props) => {
  const { author, title, url, description, urlToImage, publishedAt } =
    props.news;

  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={
            !urlToImage
              ? "https://res.cloudinary.com/carloscuesta/image/upload/v1593531857/blog-featured-images/Managing_React-Native_crashes_with_Error_Boundaries.png"
              : urlToImage
          }
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 80)
              : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, est!"}
            ...
          </p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <div className=" d-flex align-item-center flex-column">
            <p>
              <i className="bi bi-person" style={{ marginRight: "0.5rem" }}></i>
              {!author ? "Md Ariful Islam" : author.slice(0, 20)}
            </p>
            <p>
              <i className="bi bi-alarm" style={{ marginRight: "0.5rem" }}></i>
              <Moment format="YYYY/MM/DD">{publishedAt}</Moment>
            </p>
          </div>
          <a
            href={url}
            target="_blank"
            className="btn btn-dark align-self-center"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
