// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
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

const initialWheelState = {
  counter: 0
}
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE:
      if(state.counter !==5) {
        return {
          ...state,
          counter: state.counter + 1
        } 
      } else {
        return {
          ...state,
          counter: 0
        }
      }
    case MOVE_COUNTERCLOCKWISE:
      if (state.counter === 0) {
        return {
          ...state,
          counter: 5
        }
      } else {
        return {
          ...state,
          counter: state.counter - 1
        }
      }
  }
  return state
}


const initialQuizState = ""
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case SET_QUIZ_INTO_STATE:
      return action.payload
  }
  return state
}

const initialSelectedAnswerState = ""
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case SET_SELECTED_ANSWER:
      return action.payload
  }
  return state
}

const initialMessageState = ""
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case SET_INFO_MESSAGE: 
      return action.payload
  }
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        ...action.payload
      }
    case RESET_FORM:
      return {
        newQuestion: "",
        newTrueAnswer: '',
        newFalseAnswer: '',
      }
  }
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
