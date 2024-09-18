import React from 'react'

const Message = ({id, text}) => {
  return (
    <div key={id}>
      <p>{text}</p>
    </div>
  )
}

export default Message
