import React from 'react'
import './Home.css'
import ParticleBackground from '../Particles/bgParticles';

class Home extends React.Component {
render() {

return <section><div className="p1"><ParticleBackground /></div>
        <div className="body-home">
  
 
    <div className="content">
    <p>Olá, eu sou o</p>
    <p className="nome">Eduardo Maia</p>
    <div className="description">
        <p>Desenvolvedor front-end</p>
        <p>&</p>
        <p>UX/UI designer</p>

    </div>
    
    </div>
    
    
</div>
</section>;
}
}

export default Home;