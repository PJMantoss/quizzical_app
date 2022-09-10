import React from 'react';

const Question = () => {
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