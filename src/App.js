import {useState} from 'react';
import './App.css';
import Form from "./comps/Form"
import TodoList from './comps/TodoList';

function App() {
  const [todos, setTodos]=useState([]);
  // console.log(Object.keys(todos));

  // const deleteToDo= 
  return (
    <div>
         <section className="todoapp"/>
     
        <h1>todos</h1>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos}/>

       
    </div>
  )
}

export default App