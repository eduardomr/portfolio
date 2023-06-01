import React, { Component } from "react";
import CarouselPortfolio from "./carousel";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import Contato from "./Contato";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio_title">
          <h2>Portfolio</h2> 
        </div>
        <div className="flex">
          <div className="item item1">
            <CarouselPortfolio />
          </div>
          <div className="item item2">
            <Contato />
           
            </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
