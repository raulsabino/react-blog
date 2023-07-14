import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          <Route exact path="/" element={ <Home/> }></Route>
          <Route path="/About" element={ <About/> }></Route>
          <Route path="*" element={ <NotFound/> }></Route>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
