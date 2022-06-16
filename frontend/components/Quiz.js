import React from 'react'
import {useEffect} from "react"
import {connect} from "react-redux"
import {
  fetchQuiz, 
  selectAnswer,
  postAnswer
} from "../state/action-creators"

function Quiz(props) {
  // console.log("Quiz: ", props)
  const {fetchQuiz, quiz, selectedAnswer, selectAnswer, postAnswer} = props

  useEffect(() => {
      fetchQuiz()
  }, [])

  const handleSubmit = (e) => {
     e.preventDefault()
     postAnswer({
      quiz_id: quiz.quiz_id,
      answer_id: selectedAnswer
     })
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        //true 
        quiz ? (
          <>
            <h2>{quiz.question}</h2>
            <div id="quizAnswers">
              <div className={selectedAnswer === quiz.answers[0].answer_id ? "answer selected" : "answer"}>
                {quiz.answers[0].text}
                <button onClick={() => selectAnswer(quiz.answers[0].answer_id)}>
                  {selectedAnswer === quiz.answers[0].answer_id ? "SELECTED" : "Select"}
                </button>
              </div>

              <div className={selectedAnswer === quiz.answers[1].answer_id ? "answer selected" : "answer"}>
                {quiz.answers[1].text}
                <button onClick={() => selectAnswer(quiz.answers[1].answer_id)}>
                  {selectedAnswer === quiz.answers[1].answer_id ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>


            <button id="submitAnswerBtn" onClick={handleSubmit} disabled={!selectedAnswer}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st=>st, {fetchQuiz, selectAnswer, postAnswer})(Quiz)