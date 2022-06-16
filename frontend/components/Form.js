import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  console.log("FORM:", props)
  const {inputChange, form, postQuiz, newQuestion, newTrueAnswer, newFalseAnswer} = props

  const onChange = evt => {
    const {name, value} = evt.target
    console.log(evt.target.value)
    inputChange({
      [name]: value
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    postQuiz({
      question_text: form.newQuestion,
      true_answer_text: form.newTrueAnswer,
      false_answer_text: form.newFalseAnswer
    })
  }

  const handleDisabled = () => {
    return form.newQuestion.trim("").length < 1 || form.newTrueAnswer.trim("").length < 1 || form.newFalseAnswer.trim("").length < 1   
  }


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input name="newQuestion" value={form.newQuestion} maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input name="newTrueAnswer" value={form.newTrueAnswer} maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input name="newFalseAnswer" value={form.newFalseAnswer} maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button disabled={handleDisabled()} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
//mapstatetoprops => from reducer
//functions => from actions