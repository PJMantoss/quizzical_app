import React from 'react';
import {decode} from 'html-entities';

const Question = (props) => {
  //select an option
  function selectAnswer(answer, currentQuestion){
    // update answer
    props.updateAnswers(answer, currentQuestion);
  };

  //all answers
  const answersElements = props.allAnswers.map((answer, idx) => {
    return (
      // class correct => when option = correct answer
      // class incorrect => when option = user selected option & it's incorrect answer
      // class dimmed => all options selected except correct answer  
      <button 
        key={idx} 
        onClick={() => selectAnswer(answer, props.question)} 
        className={`answerBtn ${
          answer === props.selectedAnswer ? 'selected' : ''
        } 
        ${
          props.showResults && answer === props.correctAnswer ? 'correct' : ''
        } 
        ${
          props.showResults &&
          answer === props.selectedAnswer &&
          answer !== props.correctAnswer
          ? 'incorrect'
          : ''
        } 
        ${
          props.showResults && answer !== props.correctAnswer ? 'dimmed' : ''
        }`}
        disabled={props.showResults}
      >
        {decode(answer)}
      </button>
    )
  })

  return (
    <div className='questionContainer'>
      <h1 className='question'>
        {decode(props.question)}
      </h1>
      <div className='answersContainer'>
        {answersElements}
      </div>
    </div>
  )
}

export default Question;