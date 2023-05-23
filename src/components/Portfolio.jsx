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
        <div className="flex">
          <div className="item item1">
            <CarouselPortfolio />
          </div>
          <div className="item item2">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="icon" />  
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="icon" />
            </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
