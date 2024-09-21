import React from "react";

import Message from "./Components/Message/Message";
import Greeting from "./Components/Greeting";
import Counter from "./Components/Counter";
import MessageList from "./Components/Messagelist/MessageList";
import TextDisplayForm from "./Components/TextDisplayForm";
import CommentList from "./Components/CommentList";
import TemperatureConverter from "./Components/TemperatureConverter";

const messages = [
  {id: 1, text:"Hallo  Mike"},
  {id: 2, text:"Hallo  Niki"},
  {id: 3, text:"Hallo  Sara"},
  {id: 4, text:"Hallo  Misha"},
  {id: 5, text:"Hallo  Murka"}
];

function App() {
  return (
    <div className="App">
      <Message text="Hallo!" />
      <MessageList messages={messages}/>
      <CommentList />
      <TemperatureConverter/>
    </div>
  );
}


export default App;
