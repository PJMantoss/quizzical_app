import React, {useState, useEffect} from 'react';

const API = "https://opentdb.com/api.php?amount=5&category=30&difficulty=medium&type=multiple";

const Questions = () => {
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