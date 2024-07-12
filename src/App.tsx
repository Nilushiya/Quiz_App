import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import {fetchQuizQuestions} from './API';
import {QuestionState ,Difficulty} from './API'

type AnswerObject = {
  question : string
  answer : string
  correct : boolean
  correctAnswer : string
}
const Total_Questions = 10

function App() {
  const [loading , setLoading] = useState(false)
  const [questions , setQuestions] = useState<QuestionState[]>([])
  const [number , setNumber] = useState(0)
  const [userAnswers , setUserAnswers] = useState<AnswerObject[]>([])
  const [score , setScore] = useState(0)
  const [gameOver , setGameOver] = useState(true)

  console.log(questions)
  const startTrivia = async() => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      Total_Questions,
      Difficulty.EASY
    )
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)

  }

  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {

  }

  const NextQuestion = () => {

  }
  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswers.length === Total_Questions ?(
        <button className='start' onClick={startTrivia}>
          Start
        </button>
      ) : null} 
      {!gameOver ? <p className='score'>Score : </p> : null }
      {loading && <p>Loading Question....</p>}
      {!loading && !gameOver &&(<QuestionCard 
        questionNr={number + 1}
        totalQuestions={Total_Questions}
        question= {questions[number].question}
        answers={questions[number].answers}
        userAnswer = {userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />)}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== Total_Questions - 1 ? (<button className='next' onClick={NextQuestion}>
        Next Question
      </button>) : null }
    </div>
  );
}

export default App;
