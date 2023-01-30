import React from "react";
import logo from "../assets/logo.png";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Front-end skills</a>
          <a href="#">Back-end skills</a>
          <a href="#">Portfolio</a>
          <a href="#">Contato</a>
        </nav>
      </>
    );
  }
}
export default NavBar;
