import React from "react";


const Skill = (props) => {
    return (


            <div className="paragraph">
            <div className="tittle-paragraph">
                <img src={props.icon} alt="#"></img>
                <h4>{props.name}</h4>
            </div>
            <p>
                {props.text}
            </p>
            </div>
    );  
};

export default Skill;