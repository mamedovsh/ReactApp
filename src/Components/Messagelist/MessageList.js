/*Создайте компонент MessagesList, который отображает список
сообщений. Каждое сообщение должно иметь уникальный id и
текст.
Используйте проп key при рендеринге списка, чтобы
обеспечить оптимальную производительность.*/

import React from 'react'
import Message from './Message'

const MessageList = ({messages}) => {
  return (
    <div>
      {messages.map (message =>(
        <Message key={message.id} id={message.id} text={message.text}/>
      ))}
    </div>
  );
}


export default MessageList
