import './App.css';
import BasicExample from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Development from './pages/Development';
import Redesign from './pages/Redesign';
import Homepage from './pages/Home';
import { Link } from 'react-router-dom';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/development' element={<Development />} />
        <Route path='/responsiveredesign' element={<Redesign />} />
      </Routes>
    </Router>
  );
}

export default App;
