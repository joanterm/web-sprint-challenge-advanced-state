// ❗ You don't need to add extra action creators to achieve MVP
import axios from "axios"
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM
} 
from "./action-types"

export function moveClockwise() { 
  return {
    type: MOVE_CLOCKWISE
  }
}

export function moveCounterClockwise() {
  return {
    type: MOVE_COUNTERCLOCKWISE
  }
}

export function selectAnswer(answer) { 
  return({
    type: SET_SELECTED_ANSWER,
    payload: answer
  })
}

export function setMessage(message) {
  return({
    type: SET_INFO_MESSAGE,
    payload: message
  })
}

export function setQuiz(quiz) {
  return {
    type: SET_QUIZ_INTO_STATE,
    payload: quiz
  }
}

export function inputChange(value) {
  return({
    type: INPUT_CHANGE,
    payload: value
  })
}

export function resetForm() { 
  return({
    type: RESET_FORM
  })
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    axios
    .get("http://localhost:9000/api/quiz/next")
    .then((response) => {
      console.log(response.data)
      dispatch(setQuiz(response.data))
    })
    .catch((error) => {
      console.log(error.message)
    })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}

export function postAnswer({quiz_id, answer_id}) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios
    .post("http://localhost:9000/api/quiz/answer", {
      quiz_id,
      answer_id
    })
    .then((response) => {
      console.log(response.data)
      // dispatch(selectAnswer(response.data))
      dispatch(setMessage(response.data.message))
      dispatch(fetchQuiz())
    })
    .catch((error) => {
      console.log(error.message)
    })
  }
}


export function postQuiz({question_text, true_answer_text, false_answer_text}) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios
    .post("http://localhost:9000/api/quiz/new", {
      question_text,
      true_answer_text,
      false_answer_text
    })
    .then((response) => {
      console.log(response.data)
      dispatch(setMessage(`Congrats: "${response.data.question}" is a great question!`))
      dispatch(resetForm())
    })
    .catch((error) => {
      console.log(error.message)
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
