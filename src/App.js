

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import QuemSouEu from './components/QuemSouEu/QuemSouEu';


function App() {

  return (
    <div className="App">
     <div className="menu"> <Navbar /></div>
      <Home />
    <QuemSouEu />
    </div>
  );
}

export default App;
