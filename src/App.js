import './App.css';
import BasicExample from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { motion } from "framer-motion"
import Outline from './components/animation';

function App() {




  return (
    <div className="App" id='home'>
      <div id='Nav-Bar'>
        <BasicExample />
      </div>
      <div id='rest'>
        {/* <div id='Background'></div> */}
        <div id='Centerpiece'>
          <h1 id='title'>
            cs 1300<br />
            Portfolio
          </h1>
        </div>

        <div id='About'>
          <h1 className='Case-Header' id='About-Header'>About</h1>
          <div id='About-Body'>
            <img src='images/IMG_2792.jpeg' alt='me' id='Headshot' />
            <p>
              Lorem ipsum dolor sit amet,consectetur adipiscing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. U
              t enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat no
              n proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
          </div>

        </div>

        <div className='Case-Study' id='Responsive-Redesign'>
          <h1 className='Case-Header'>Responsive Redesign</h1>
        </div>
        <div className='Case-Study' id='Development'>
          <h1 className='Case-Header'>Development</h1>
        </div>
        <div className='Case-Study' id='Third-Thing'>
          <h1 className='Case-Header'>Third Thing</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
