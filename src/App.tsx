import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';

const Total_Questions = 10

function App() {
  const [loading , setLoading] = useState(false)
  const [questions , setQuestins] = useState([])
  const [number , setNumber] = useState(0)
  const [userAnswers , setUserAnswers] = useState([])
  const [score , setScore] = useState(0)
  const [gameOver , setGameOver] = useState(true)
  const startTrivia = async() => {

  }

  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {

  }

  const NextQuestion = () => {

  }
  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score : </p>
      <p className='L'>Loading Question....</p>
      <QuestionCard 
        questionNr={number + 1}
        totalQuestions={Total_Questions}
        question= {questions[number].question}
        answers={questions[number].answers}
        userAnswer = {userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      <button className='next' onClick={NextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
