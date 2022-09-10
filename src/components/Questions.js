import React, {useState, useEffect} from 'react';

const Questions = () => {

  const API = "https://opentdb.com/api.php?amount=5&category=30&difficulty=medium&type=multiple";

  const [question, setQuestion] = useState([]);

  useEffect(() => {
    const getQuestion = async () => {
      let res = await fetch(API);
      console.log(res);
      setQuestion(await res.json());
    };

    getQuestion();
  }, []);

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