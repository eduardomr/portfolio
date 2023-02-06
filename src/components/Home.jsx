import React from "react";
import Button from "./Button.jsx";
import profileLogo from "../assets/profile_picture.png";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="profile_image">
          <img
            src={profileLogo}
            alt="profile_image"
          />
        </div>
        <div className="profile_text">
            <div className="profile_subtitle">
            <h2>Desenvolvedor web full-stack</h2>
            </div>
          <div className="profile_name">
            <h1>EduMaia</h1>
          </div>
          <p>
            Olá! Eu sou Eduardo Maia, estudante de Engenharia de Software e
            desenvolvedor web full-stack. Sou apaixonado por programação, design
            e UX. Tenho experiência em prototipação e design de interfaces.
            Busco sempre me atualizar nas tecnologias atuais, incluindo o
            desenvolvimento mobile e machine learning. Aqui em meu portfolio,
            você pode ver alguns dos meus projetos que demonstram minhas
            habilidades como desenvolvedor e designer. Obrigado por visitar!
          </p>
          <div className="profile_buttons">
          <Button text="Contato"/><Button text="Portfólio"/>
          </div>
        </div>
        
      </div>
    );
  }
}
export default Home;
