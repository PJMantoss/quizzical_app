import Questions from './components/Questions';
import Intro from './components/Intro';
import './App.css';

function App() {
  return (
    <div className="App">
      <img 
        src='../images/yellowblob.png' 
        alt='' 
        className='yellowblob' 
      />
      <Intro />
      <img 
        src='../images/blueblob.png' 
        alt='' 
        className='blueblob' 
      />
    </div>
  );
}

export default App;