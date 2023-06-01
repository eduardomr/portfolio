import React from 'react';
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import EmailButton from './EmailButton';
import '../styles/components/contato.css';

const Contato = () => {
    return (<div className="contato">
                <h4 className="contato_title">Contato</h4>
                <div className="contato_box">
                    <div className="contato_box_content">
                <EmailButton />
                <a href="https://www.linkedin.com/in/eduardomaiar/" ><img src={linkedin} alt="icon" /></a>  
                <a href="https://github.com/eduardomr" ><img src={github} alt="icon" /></a>
                </div>
                    </div>
            </div>
    );
};


export default Contato;

