import React, {useState, useEffect} from 'react';
import Question from './Question';

const Questions = () => {

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
    if(questions.length === 0){
      const API = "https://opentdb.com/api.php?amount=5&category=30&difficulty=medium&type=multiple";

      fetch(API).then(response => response.json()).then(data => {
        setQuestions(data.results);
        console.log(data.results)
        // Each item in questionAndOptions will be an {} containing the following:
        // question, shuffle answers, correct answer, selected answer

        setQuestionAndOptions(
          data.results.map(questionObj => {
            return {
              question: questionObj.question,
              shuffledAnswers: shuffle([
                ...questionObj.incorrect_answers,
                questionObj.correct_answer
              ]),
              correctAnswer: questionObj.correct_answer,
              selectedAnswer: ''
            }
          })
        )
      })
    }
  }, [questions]);

  // shuffle answers
  function shuffle(arr){
    let currentIndex = arr.length;
    let randomIndex;

    while(currentIndex != 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }

    return arr;
  }

  // Choosing an option 
  function updateAnswers(currentQuestion, answer){
    setQuestionAndOptions(
      questionAndOptions.map(questionObj => {
        // if it's the question being answered, update its selected answer
        return questionObj.question === currentQuestion
      })
    )
  }

  return (
    <div>
        <Question />
    </div>
  )
}

export default Questions;

//https://opentdb.com/api.php?amount=5&category=30&difficulty=medium&type=multiple