import React from "react";

const Project = (props) => {
  const { name, description, image, link } = props;

  return (
    <div className="project">
      <div className="project_title">
        <a href={link}>
          <h3>{name}</h3>
        </a>
      </div>

      <div className="project_image">
        <a>
          <img src={image} alt={name} />
        </a>
      </div>
      <div className="project_description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;
