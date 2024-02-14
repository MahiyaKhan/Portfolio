import React from "react";

import "../../../styles/About/Route/Experience.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="experience__container">
          <div className="experience__header">
            <h2 className="experience__number">
              0<span>2</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              E<span>xperience</span>.
            </h1>
          </div>
          <div className="experience__description">
            <div className="experience__main-box">
              <div className="experience__box">
                <h2>Extreme Networks</h2>
                <h3>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="experience__calendar"
                  />
                  &nbsp; &nbsp;03/07/2023 - PRESENT
                </h3>
                <ul>
                  <p>Responsible for -</p>
                  {/* <li data-aos="fade-right" data-aos-delay="200">
                    <span>
                      Developing multiple highly responsive and adaptive website
                      using React and Vue
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="400">
                    <span>Developing new user-facing features</span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="600">
                    <span>Building reusable code</span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="800">
                    <span>Add few more lines...</span>
                  </li> */}
                </ul>
              </div>

              {/* You can put this repeated code as a child component similar to internship.js  */}
              <div className="experience__box">
                <h2>Absolute Foods(ECSO Global)</h2>
                <h3>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="experience__calendar"
                  />
                  &nbsp; &nbsp;01/05/2022 - 28/06/2023
                </h3>
                <ul>
                  <p>Responsible for -</p>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <span>
                      Worked on implementation of Pest&Disease Detetction Model
                      using Yolov5 and deployed it using Torch Serve.
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="400">
                    <span>
                      Automated the DSSAT crop simulation model and create an
                      API for it and deployed it using docker.{" "}
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="600">
                    <span>
                      Data Preprocessing - Enhanced image quality of Sentinel 2
                      Satellite using ESRGAN and modified its architecture as
                      per business requirements.{" "}
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="800">
                    <span>
                      Data Preprocessing - Balanced image data using GAN.
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="1000">
                    <span>
                      Built an API for weather usecase which takes input as lat
                      long and return weather report accordingly.{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
