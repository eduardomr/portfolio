import React from "react";
import Carousel from "react-bootstrap/Carousel";
import projects from "../ProjectData.json";
import 'bootstrap/dist/css/bootstrap.min.css';

const CarrouselPortfolio = (props) => {
  const { name, description, image, link } = props;
  const width_component = "40vh";
  const padding_component = "5pvh";
  return (
    <div className="carousel-box" style={{display: "block", width:width_component, padding: padding_component}}>
      <h4>Projetos</h4>
      <Carousel fade>
      {Object.keys(projects).map((project, index) => {
        const interval = index === 0 ? 1500 : 2000;
        return (
            <Carousel.Item key ={index} interval={interval}>
              <img
                className="d-block w-100"
                src={projects[project].image}
                alt={projects[project].name}
              />
              <Carousel.Caption>
               <a target="_blank" href={projects[project].link}> <h3>{projects[project].name}</h3></a>
                <p>{projects[project].description}</p>
              </Carousel.Caption>
            </Carousel.Item>
        );
      })}
      </Carousel>
    </div>
  );
};
export default CarrouselPortfolio;
