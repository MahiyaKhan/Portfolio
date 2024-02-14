import React from "react";

import "../../../styles/About/Route/Graduation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Graduation = () => {
  return (
    <>
      <div className="graduation">
        <div className="graduation__container">
          <div className="graduation__header">
            <h2 className="graduation__number">
              0<span>4</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              E<span>ngineering</span>.
            </h1>
          </div>

          <div className="graduation__description">
            <h1>Aligarh Muslim University</h1>
            <h2>
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="internships__calendar"
              />
              &nbsp;&nbsp;05/08/2016 - 31/07/2022
            </h2>
            <p>
              I hold a Master's degree in Computer Science and Applications from
              Aligarh Muslim University, earned between 2019 and 2022. Prior to
              that, I completed my Bachelor of Science (Honors) in Computer
              Science at the same institution from 2016 to 2019. These academic
              pursuits have equipped me with a strong foundation in computer
              science principles, enabling me to excel in my career as a data
              scientist.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graduation;
