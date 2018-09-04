import React from 'react'

const UserInput = (props) => {
  return (
    <div className="user-input">
      <input type="text"
      onChange={props.changed}
      value={props.currentName}
      />
    </div>
  )
}

export default UserInput;
