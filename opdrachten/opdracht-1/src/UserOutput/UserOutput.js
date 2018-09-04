import React from 'react'
import './UserOuput.css'

const UserOuput = (props) => {
  return (
    <div className="user-output">
      <p>{props.name} Output1</p>
      <p>Output2</p>
    </div>
  )
}

export default UserOuput;
