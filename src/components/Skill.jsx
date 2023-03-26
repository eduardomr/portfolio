import React from "react";
import pencil from "../assets/pencil.png"


const Skill = (props) => {
    return (


            <div className="paragraph">
            <div className="tittle-paragraph">
                <img src={props.icon}></img>
                <h4>{props.name}</h4>
            </div>
            <p>
                {props.text}
            </p>
            </div>
    );  
};

export default Skill;