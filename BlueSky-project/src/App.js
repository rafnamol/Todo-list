import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css'
import Header from "./Header";
import Content from "./Content";
import server from "./server.js";

function App() {
  const [todos,setTodos] = React.useState([])
  const [todo,setTodo] = React.useState("")

  useEffect(() => {
    fetch("api/todos", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
      .then((response) => response.json())
      .then((json) => setTodos(json))
  }, [])

  // useEffect(() => {
  //   fetch("api/users" , {
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   })
  //     .then((result) => result.json())
  //     .then((resp) => {
  //       // console.warn(resp)
  //       setTodo(resp)
  //     })
  //   }
  // )

  return (
    <div className="App">
      <header className="App-header">
        <Content todos={todos} setTodos={setTodos} />
      </header>
    </div>
  );
}

export default App;
