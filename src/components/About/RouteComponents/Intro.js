import React from "react";

import "../../../styles/About/Route/Intro.scss";
const Intro = () => {
  return (
    <>
      <div className="about-intro">
        <div className="about-intro__container">
          <div className="about-intro__header">
            <h2 className="about-intro__number">
              0<span>1</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              H<span>ello</span>.
            </h1>
          </div>
          <div className="about-intro__description">
            <p data-aos="fade-right">
              I am <span>Mohd Aquib....</span>
            </p>
            <p data-aos="fade-right" data-aos-delay="200">
              {" "}
              I am proficient in Python, C++, SQL, and MongoDB, I specialize in
              data analysis and manipulation, leveraging Docker for seamless
              deployment.
            </p>
            <p data-aos="fade-right" data-aos-delay="400">
              Experienced in deep learning frameworks like TensorFlow and
              PyTorch, I've developed advanced models including CNNs, RNNs, and
              GANs for tasks like object detection and image processing.
            </p>
            <p data-aos="fade-right" data-aos-delay="600">
              Skilled in data visualization with NumPy, Pandas, Matplotlib, and
              Seaborn, I craft insightful visualizations and extract actionable
              insights.
            </p>
            <p data-aos="fade-right" data-aos-delay="800">
              With a commitment to innovation, I collaborate effectively using
              Git and GitHub, delivering impactful solutions and driving
              business growth through machine learning and AI.{" "}
            </p>

            <div className="about-intro__emoji">:&nbsp;)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
