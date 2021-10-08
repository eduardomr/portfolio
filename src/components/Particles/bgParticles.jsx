import React from 'react'
import Particles from 'react-particles-js';
import particlesConfig from './particle-config';


class ParticleBackground extends React.Component {
    render() { 
        return (<div className="particulas"><Particles params={particlesConfig}></Particles></div>)
    }
}
 
export default ParticleBackground;