import React from "react";

const Hero = () => {
  return (
    <div className="hero-area bg-primary-dark">
      <div className="container">
        <div className="hero-area__content">
          <div className="hero-text">
            <h1
              className="fw-bolder text-uppercase text-light"
              style={{ fontSize: "4rem" }}
            >
              Journalism Without <br />
              Fear or Favour
            </h1>
            <p className="text-light" style={{ fontSize: "1.4rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ipsa quod deserunt nemo labore ut expedita quas itaque
              nam laboriosam modi aliquid inventore illum facilis, ducimus nulla
              quis sapiente unde accusamus tempore amet, dolor hic.
            </p>

            <button className="btn btn-warning header-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
