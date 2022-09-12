import React from 'react';
import {decode} from 'html-entities';

const Question = (props) => {
  //select an option
  function selectAnswer(answer, currentQuestion){
    // update answer
    props.updateAnswer(answer, currentQuestion);
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
          props.showResult && answer === props.correctAnswer ? 'correct' : ''
        } 
        ${
          props.showResult &&
          answer === props.selectedAnswer &&
          answer !== 
        } ${}`}
        disabled={props.showResult}
      >
        {decode(answer)}
      </button>
    )
  })

  return (
    <div className='questionContainer'>
      <h1 className='question'>Question</h1>
      <div className='answersContainer'>
        <span className='answersBtn'>Ans1</span>
        <span className='answersBtn'>Ans2</span>
        <span className='answersBtn'>Ans3</span>
        <span className='answersBtn'>Ans4</span>
      </div>
    </div>
  )
}

export default Question;