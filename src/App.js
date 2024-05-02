import './App.css';
import BasicExample from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div id='Nav-Bar'>
        <BasicExample/>
      </div>
      <div id='rest'>
        <div id='Centerpiece'>
          <h1>
            cs 1300<br/>
            Portfolio
          </h1>
        </div>
        <div className='Case-Study' id='Responsive-Redesign'>

        </div>
      </div>
    </div>
  );
}

export default App;
