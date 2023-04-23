import React, { Component } from "react";
import CarouselPortfolio from "./carousel";
import projects from "../ProjectData.json";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio_title">
          <h2>Portfolio</h2>
        </div>

        <CarouselPortfolio />
      </div>
    );
  }
}

export default Portfolio;
