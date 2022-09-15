import React from 'react'

const Intro = (props) => {
  return (
    <div className='intro'>
        <h1 className='heading'>Quizzical</h1>
        <p className='desc'>Have fun picking your brain</p>
        <button 
          className='startBtn'
          onClick={() => props.setShowQuestions(true)}
        >
          Start Quiz
        </button>
    </div>
  )
}

export default Intro