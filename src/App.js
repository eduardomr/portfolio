import React from 'react';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import FrontSkills from './components/FrontSkills.jsx';
import './App.css';
import BackSkills from './components/BackSkills.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <FrontSkills/>
      <BackSkills/>
    </div>
  );
}

export default App;
