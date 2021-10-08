import React from 'react'
import './Home.css'

class Home extends React.Component {
render() {
return <div className="body-home">
    <div className="content">
    <p>Olá, eu sou o</p>
    <p className="nome">Eduardo Maia</p>
    <div className="description">
        <p>Desenvolvedor front-end</p>
        <p>&</p>
        <p>UX/UI designer</p>
    </div>
    </div>
    

</div>;
}
}

export default Home;