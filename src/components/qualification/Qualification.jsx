import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tab">
          <div className="qualification_button qualification_active button--flex">
            <i class="uil uil-graduation-cap qualification_icon">Education</i>
          </div>
        </div>

        <div className="qualification_section">
          <div className="qualification_content">
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  B.TECH Bachelor of Technology-CSE
                </h3>
                <span className="qualification_subtitle">
                  Roorkee Institute of Technology
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Itermediate</h3>
                <span className="qualification_subtitle">
                  Lucknow Public School
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2020
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Marticulation</h3>
                <span className="qualification_subtitle">
                  Lucknow Public School
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
