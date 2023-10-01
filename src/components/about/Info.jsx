import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="bx bx-award about_icon"></i>

        <h3 className="about_title">Project Experience</h3>
        <span className="span about_subtitle">1-year</span>
      </div>

      <div className="about_box">
        <i class="bx bx-briefcase-alt about_icon "></i>

        <h3 className="about_title">Completed</h3>
        <span className="span about_subtitle">5 + Projects</span>
      </div>

      <div className="about_box">
        <i class="uil uil-clipboard-notes"></i>
        <h3 className="about_title">Skills</h3>
        <span className="span about_subtitle">Frontend && Backend </span>
      </div>
    </div>
  );
};

export default Info;
