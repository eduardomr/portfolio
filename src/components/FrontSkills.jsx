import React from "react";
import pencil from "../assets/pencil.png";
import screen from "../assets/screen.png";
import market from "../assets/market.png";
import Skill from "./Skill.jsx";

class FrontSkills extends React.Component {
  render() {
    return (
      <div className="front_skills">
        <div className="front_skills_title">
          <h2>Front-end skills</h2>
        </div>
        <div className="content">
          <div className="doing">
            <h3>O que tenho feito?</h3>
            <Skill name="UX/UI Design" icon={pencil} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis faucibus erat. Donec risus magna, semper sed volutpat non, congue a lectus. Nulla aliquam diam ut mauris tincidunt, at rhoncus dui varius."/>           
            <Skill name="HTML, CSS & Javascript" icon={screen} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis faucibus erat. Donec risus magna, semper sed volutpat non, congue a lectus. Nulla aliquam diam ut mauris tincidunt, at rhoncus dui varius."/>
            <Skill name="React & React Native" icon={market} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis faucibus erat. Donec risus magna, semper sed volutpat non, congue a lectus. Nulla aliquam diam ut mauris tincidunt, at rhoncus dui varius."/>
          </div>
          <div className="percentages">
            <div className="percentage">
              <div className="percentage_title">
                <h4>HTML</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FrontSkills;
