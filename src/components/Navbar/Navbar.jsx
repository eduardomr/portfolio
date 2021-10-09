import React from 'react';
import {MenuItems} from './MenuItems';
import { Button } from '../Button';
import './Navbar.css'
import Logo from '../../img/logo.svg'

class Navbar extends React.Component {
state = { clicked: false }

handleClick = ()=>{
    this.setState({clicked: !this.state.clicked})
}

render() {
return ( <nav className="NavbarItems">

    <img className="navbar-logo"src={Logo} alt="logo"></img>
    <div className="menu-icon" onClick={this.handleClick}>
        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
    </div>

    <ul className={this.state.clicked ? 'nav-menu active' :  'nav-menu'} >

        {MenuItems.map((item,index)=>{
        return (
        <li key={index}><a className={item.cName} href={item.url}>
                {item.title}
            </a></li>
        )
        })}

    </ul>
   <div className="btn-bar"> <Button>Fale Comigo</Button></div>
</nav>)
}
}
export default Navbar;