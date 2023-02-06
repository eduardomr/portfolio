import React from "react";
import logo from "../assets/logo.png";



class NavBar extends React.Component {
  state = {
    menuOpen: false
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuOpen: !state.menuOpen
    }));
  };

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
        <button className="menu-toggle" onClick={this.toggleMenu}>
          Menu
        </button>
        <div
          className="menu"
          style={{ display: this.state.menuOpen ? "block" : "none" }}
        >
          <a href="#">Home</a>
          <a href="#">Front-end skills</a>
          <a href="#">Back-end skills</a>
          <a href="#">Portfolio</a>
          <a href="#">Contato</a>
        </div>
      </>
    );
  }
}
export default NavBar;
