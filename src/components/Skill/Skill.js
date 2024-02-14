import React, { useEffect } from "react";

// Importing TagCloud for  3D Rotating Text Sphere
import TagCloud from "TagCloud";

import "../../styles/Skill/Skill.scss";

const Skill = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = ".tagcloud";
    let radii;

    // If 3D Text Sphere is not showing up after deployment remove the return (i.e, return() =>{}) function from below code
    return () => {
      const texts = [
        "SQL",
        "Python",
        "Machine Learning",
        "Deep Learning",
        "GAN",
        "StreamLit",
        "Flask",
        "Fast API",
        "Docker",
        "MongoDB",
        "GIT",
        "GITHUB",
      ];

      // Decrasing 'radius' value for small screen devices
      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 300;
        } else {
          radii = 290;
        }
        return radii;
      }

      const options = {
        radius: radiusValue(),
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);
  return (
    <>
      <div className="skill">
        <div className="skill__main-container">
          <div className="skill__header" id="skill__heading">
            <h1>
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                K
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                I
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
          </div>
          <div className="skill__inner-container">
            <div className="skill__info">
              <div className="skill__details-container">
                <div className="skill__details">
                  <h4>Basic</h4>
                  <ul>
                    <li>
                      <span>Python</span>
                    </li>
                    <li>
                      <span>C++</span>
                    </li>
                    <li>
                      <span>SQL</span>
                    </li>
                    <li>
                      <span>MongoDB</span>
                    </li>
                    <li>
                      <span>Docker</span>
                    </li>
                  </ul>
                </div>

                <div className="skill__details">
                  <h4>Deep Learning</h4>
                  <ul>
                    <li>
                      <span>Artificial Neural Network</span>
                    </li>
                    <li>
                      <span>Convolutional Neural Network</span>
                    </li>
                    <li>
                      <span>Recurrent Neural Network</span>
                    </li>
                    <li>
                      <span>TensorFlow</span>
                    </li>
                    <li>
                      <span>PyTorch</span>
                    </li>
                    <li>
                      <span>TorchServe</span>
                    </li>
                    <li>
                      <span>Object Detection</span>
                    </li>
                    <li>
                      <span>Generative Adversarial Network</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3D Text Cloud  */}
            <div className="skill__info">
              <div className="skill__details-container"></div>
              <div className="skill__cloud">
                <div
                  className="tagcloud"
                  data-aos="zoom-in-up"
                  data-aos-offset="200"
                ></div>
              </div>
            </div>
            <div className="skill__info">
              <div className="skill__details-container">
                <div className="skill__details">
                  <h4>Machine Learning</h4>
                  <ul>
                    <li>
                      <span>NumPy</span>
                    </li>
                    <li>
                      <span>Pandas</span>
                    </li>
                    <li>
                      <span>Seaborn</span>
                    </li>
                    <li>
                      <span>Matplotlib</span>
                    </li>
                    <li>
                      <span>Ploty-Express</span>
                    </li>
                    <li>
                      <span>Scikit-Learn</span>
                    </li>
                  </ul>
                </div>

                <div className="skill__details">
                  <h4>Natural Language Processing</h4>
                  <ul>
                    <li>
                      <span>nltk</span>
                    </li>
                    <li>
                      <span>CBOW</span>
                    </li>
                    <li>
                      <span>Skipgrams</span>
                    </li>
                    <li>
                      <span>TF-IDF</span>
                    </li>
                    <li>
                      <span>Word2vec</span>
                    </li>
                    <li>
                      <span>LSTM</span>
                    </li>
                    <li>
                      <span>Transformers</span>
                    </li>
                    <li>
                      <span>BERT</span>
                    </li>
                    <li>
                      <span>Generative AI</span>
                    </li>
                    <li>
                      <span>Langchain</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Version Control Systems</h4>
                  <ul>
                    <li>
                      <span>GitHub</span>
                    </li>
                    <li>
                      <span>Big Bucket</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
