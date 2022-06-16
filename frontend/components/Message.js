import React from 'react'
import {connect} from "react-redux"
import {setMessage} from "../state/action-creators"

function Message(props) {
  // console.log("Message:", props);
  const {infoMessage} = props

  return <div id="message">{infoMessage}</div>
}


export default connect(st=>st, {setMessage})(Message)


