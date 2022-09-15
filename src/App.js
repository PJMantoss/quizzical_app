import { useState } from 'react';
import Questions from './components/Questions';
import Intro from './components/Intro';
import './App.css';

function App() {
  const [showQuestions, setShowQuestions] = useState(false);
  return (
    <div className="App">
      <img 
        src='../images/yellowblob.png' 
        alt='yellowblob' 
        className='yellowblob' 
      />
      {showQuestions ? 
        (<Questions />) : 
        (<Intro setShowQuestions={true} />)
      }
      <img 
        src='../images/blueblob.png' 
        alt='blueblob' 
        className='blueblob' 
      />
    </div>
  );
}

export default App;