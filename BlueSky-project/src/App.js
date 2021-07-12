import React, { useState, useMemo,useReducer } from 'react';
import logo from './logo.svg';
import './App.css'
import Header from "./Header";
import Content from "./Content";
import {makeServer} from "./server.js";
import ToDoContext from './context'

function App() {
  makeServer();
  
 
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState("")
  
  const todoContext = useMemo(
    () => ({
      addTodo: async (data) => {
        await fetch(
            "api/todo/create",
            {
              method: "POST",
              body: JSON.stringify(
                  {"name":"Something to do","isComplete":false}),
            }
          )
          dispatch({ type: "ADD" });
      },

      listTodo: async (data) => {
      
          dispatch({ type: "LIST", value:data });
          console.log(state.todosFcontext)
      },
    }),
    []
  );
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "ADD":
          return {
            ...prevState,
            isLoading: true,
          };
        case "LIST":
          return {
            ...prevState,
            todosFcontext: action.value
          }
      }
    },
    {
      isLoading: true,
      todosFcontext: {},
    }
  );


 

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
  <ToDoContext.Provider value={{todoContext, state, dispatch}}><Content /></ToDoContext.Provider>  
      
      </header>
    </div>
  );
}

export default App;
