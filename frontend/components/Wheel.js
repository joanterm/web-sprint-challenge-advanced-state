import React from 'react'
import {connect} from "react-redux"
import {moveClockwise, moveCounterClockwise} from "../state/action-creators"

function Wheel(props) {
  console.log(props);
  const {counter, moveClockwise, moveCounterClockwise} = props

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`${counter === 0 ? "cog active": "cog"}`} style={{ "--i": 0 }}>{`${counter === 0 ? "B": ""}`}</div>
        <div className={`${counter === 1 ? "cog active": "cog"}`} style={{ "--i": 1 }}>{`${counter === 1 ? "B": ""}`}</div>
        <div className={`${counter === 2 ? "cog active": "cog"}`} style={{ "--i": 2 }}>{`${counter === 2 ? "B": ""}`}</div>
        <div className={`${counter === 3 ? "cog active": "cog"}`} style={{ "--i": 3 }}>{`${counter === 3 ? "B": ""}`}</div>
        <div className={`${counter === 4 ? "cog active": "cog"}`} style={{ "--i": 4 }}>{`${counter === 4 ? "B": ""}`}</div>
        <div className={`${counter === 5 ? "cog active": "cog"}`} style={{ "--i": 5 }}>{`${counter === 5 ? "B": ""}`}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={() => moveCounterClockwise()}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={() => moveClockwise()}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.wheel.counter
  }
}

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel)