import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import NewBlog from './NewBlog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          <Route exact path="/" element={ <Home/> }></Route>
          <Route path="/About" element={ <About/> }></Route>
          <Route path="/NewBlog" element={ <NewBlog/> }></Route>
          <Route path="*" element={ <NotFound/> }></Route>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
