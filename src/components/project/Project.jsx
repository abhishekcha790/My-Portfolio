import React from "react";
import "./project.css";
import Img1 from "../../assets/project1.png";
import Img2 from "../../assets/project2.png";
import Img3 from "../../assets/project3.png";
import Img4 from "../../assets/project4.png";
import Img5 from "../../assets/project5.png";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Crypto-Currency App (C-Crypto)-",
    github: "https://github.com/abhishekcha790",
    demo: "https://crypto-app-eta-one.vercel.app/",
  },
  {
    id: 2,
    image: Img2,
    title: "Chat Application using socket.io (C-Chat)-",
    github: "https://github.com/abhishekcha790",
    demo: "https://cchat-seven.vercel.app/",
  },
  {
    id: 3,
    image: Img3,
    title: "Weather App for weather conditions-",
    github: "https://github.com/abhishekcha790",
    demo: "https://weather-app-tau-khaki.vercel.app/",
  },
  {
    id: 4,
    image: Img4,
    title: "Netflix clone (frontend)-",
    github: "https://github.com/abhishekcha790",
    demo: "https://netflix-clone-phi-ruddy.vercel.app/",
  },
  {
    id: 5,
    image: Img5,
    title: "Tracker used for customer tracking (Extension)-",
    github: "https://github.com/abhishekcha790",
    demo: "https://tracker-phi-olive.vercel.app/",
  },
];

const Project = () => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <h5>My Recent Work</h5>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
