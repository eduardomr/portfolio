import React from 'react'
import './QuemSouEu.css'
import Foto from '../../img/software-development.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '../Button';


class QuemSouEu extends React.Component {
    
    
    render() { 
        return <div className="box">
            {AOS.init({duration:800})}
            <p data-aos="fade-down" className="title">Quem sou eu</p>
            <img data-aos="fade-right"className="foto" src={Foto}  alt="foto"/>
            <p data-aos="fade-down"className="texto">Meu nome é Eduardo, tenho 23 anos, moro no Brasil, Brasília - DF. Sou estudante de Engenharia de Software na Universidade de Brasília, freelancer e estágiário. Atualmente tenho estudado bastante UX/UI Design, React e NodeJs.
            Comecei a programar em 2018. Desde então venho me dedicando e me apaixonando por novas tecnologias.
            <div className="botao-qm-sou-eu"><Button>Fale Comigo</Button></div></p>
            <div data-aos="fade-down"className="botao-qm-sou-eu2"><Button>Fale Comigo</Button></div>
        </div>;
    }
}
 
export default QuemSouEu;