import React, {useState, useEffect} from 'react';
import Question from './Question';

const Questions = () => {

  const API = "https://opentdb.com/api.php?amount=5&category=30&difficulty=medium&type=multiple";

  // questions from the OTDB API
  const [questions, setQuestions] = useState([]);

  // mapping each question to its options
  const [questionAndOptions, setQuestionAndOptions] = useState([]);

  // If there are unanswered question(s) show warning
  const [showWarning, setShowWarning] = useState(false);

  // Number of correct answers
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);

  // Show results
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // first render and new game
    if(questions.length === 0){}
  }, []);

  return (
    <div>
        <Question />
    </div>
  )
}

export default Questions;

//https://opentdb.com/api.php?amount=5&category=30&difficulty=medium&type=multiple