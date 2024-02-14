import React, { useEffect } from "react";

import "../../styles/Hero/Hero.scss";

import Myself from "../../assets/images/myself.png";

const Hero = () => {
  useEffect(() => {
    const alphbets = document.getElementsByClassName("hero__alphabet");
    for (let i = 0; i <= alphbets.length; i++) {
      alphbets[i]?.addEventListener("animationend", function () {
        alphbets[i].classList.remove("alphabet-animated");
      });

      alphbets[i]?.addEventListener("mouseover", function () {
        alphbets[i].classList.add("alphabet-animated");
      });
    }
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__intro-box">
            <p className="hero__intro-title">
              <span className="hero__intro-line" data-aos="fade-down"></span>
              HELLO, I AM MOHD. AQUIB
            </p>
            <p className="hero__animated-alphabet-box">
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                D
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                A
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                T
              </span>
              <span
                className="hero__alphabet hero__alphabet--last"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                A
              </span>
              {/* <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                T
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                E
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                N
              </span>
              <span
                className="hero__alphabet hero__alphabet--last"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                D
              </span> */}
              <span
                className="hero__developer-text"
                data-aos="zoom-out-down"
                data-aos-delay="1000"
              >
                <span className="hero__dev-text">SCIENTIST</span>
              </span>
            </p>
            <div
              className="hero__description"
              data-aos="fade"
              data-aos-delay="1200"
            >
              <p>
                Unlocking the secrets of data for over 2.5 years, I'm a seasoned
                data scientist who thrives on transforming raw numbers into
                actionable insights. From unraveling patterns to predicting
                trends, I wield algorithms and analytics to navigate the data
                maze. With a passion for problem-solving and a knack for
                innovation, I'm ready to turn your data into gold.
              </p>
              {/* <p>
                I'm a passionate and responsible{" "}
                <span>front-end developer</span>, with more than 1.5 years of
                experience. Skilled in developing highly responsive websites and
                mobile apps with elegant and efficient code.
              </p> */}
            </div>

            <div className="hero__buttons">
              <a
                className="hero__know-btn"
                href="#about"
                data-aos="fade-up"
                data-aos-delay="1800"
              >
                Know more
              </a>
              <a
                className="hero__contact-btn"
                href="#contact"
                data-aos="fade-up"
                data-aos-delay="2000"
              >
                Contact me
              </a>
            </div>
          </div>
          <div
            className="hero__image"
            data-aos="zoom-in"
            data-aos-delay="200"
            style={{ height: "800px", width: "500px", marginRight: "100px" }}
          >
            <img src={Myself} alt="me" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
