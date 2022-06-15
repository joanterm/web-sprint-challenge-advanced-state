import React from 'react'
import {useEffect} from "react"
import {connect} from "react-redux"
import {fetchQuiz} from "../state/action-creators"

function Quiz(props) {
  console.log("Quiz: ", props)
  const {fetchQuiz, quiz} = props
 
  useEffect(() => {
      fetchQuiz()
  }, [])
  
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        //true 
        quiz ? (
          <>
            <h2>{quiz.question}</h2>
            <div id="quizAnswers">
              <div className="answer selected">
                {quiz.answers[0].text}
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {quiz.answers[1].text}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st=>st, {fetchQuiz})(Quiz)