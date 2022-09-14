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
  const [showResult, setShowResult] = useState(false);

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
        ? {...questionObj, selectedAnswer: answer}
        : questionObj
      })
    );
  }

  // on clicking check answers
  function checkAnswers(){
    // find unanswered questions

    // case 1: missing answers
    const notAllAnswered = questionAndOptions.some(
      questionObj => questionObj.selectedAnswer === ''
    );

    setShowWarning(notAllAnswered);

    // case 2: All questions have been answered
    if(!notAllAnswered){
      questionAndOptions.forEach(questionObj => {
        // compare selected answer and correct answer
        if(questionObj.selectedAnswer === questionObj.correctAnswer){
          setNumOfCorrectAnswers(
            prevNumCorrectAnswers => prevNumCorrectAnswers + 1
          );
        }
      });
      // Show result
      showResult(true)
    }
  };

  // Play again
  function playAgain(){
    // reset states
    setQuestions([]);
    setQuestionAndOptions([]);
    setShowResult(false);
    setNumOfCorrectAnswers(0);
  }

  // Questions

  return (
    <div>
        <div className=''>
          {
            questionAndOptions.map((questionObj,idx) => {
              return (
                <Question 
                  key={idx} 
                  question={questionObj.question} 
                  allAnswers={questionObj.shuffledAnswers}
                  selectedAnswer={questionObj.selectedAnswer}
                  correctAnswer={questionObj.correctAnswer}
                  showResult={showResult}
                  updateAnswers={updateAnswers}
                />
              );
          })}
        </div>
    </div>
  )
}

export default Questions;