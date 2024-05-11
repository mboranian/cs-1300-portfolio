import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Development from './pages/Development';
import Redesign from './pages/Redesign';
import Homepage from './pages/Home';
import Third from './pages/Third';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/development' element={<Development />} />
        <Route path='/responsiveredesign' element={<Redesign />} />
        <Route path='/portfolio' element={<Third />} />
      </Routes>
    </Router>
  );
}

export default App;
