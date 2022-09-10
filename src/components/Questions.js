import React, {useState, useEffect} from 'react';

const Questions = () => {

  const API = "https://opentdb.com/api.php?amount=5&category=30&difficulty=medium&type=multiple";
  console.log(API);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
        <h3>Question</h3>
        <div>Options</div>
        <button>Check Answers</button>
    </div>
  )
}

export default Questions;

//https://opentdb.com/api.php?amount=5&category=30&difficulty=medium&type=multiple