/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-flower1" style={{ fontSize: "3.5rem" }}></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                business
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">
                health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                technology
              </Link>
            </li>
          </ul>
          <div className="text-end">
            <button
              type="button"
              className="btn btn-outline-light me-2 header-btn"
            >
              <i
                className="bi bi-box-arrow-in-right"
                style={{ marginRight: "0.5rem" }}
              ></i>
              Login
            </button>
            <button type="button" className="btn btn-warning header-btn">
              <i className="bi bi-person" style={{ marginRight: "0.5rem" }}></i>
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
