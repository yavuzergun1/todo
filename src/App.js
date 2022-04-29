import {useState} from 'react';
import './App.css';
import Form from "./comps/Form"
import TodoList from './comps/TodoList';
import Footer from './comps/Footer'

function App() {
  const [todos, setTodos]=useState([]);
  // console.log(Object.keys(todos));

  // const deleteToDo= 
  return (
    <div>
         <section className="todoapp"/>
     
        <h1> My todos</h1>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos}/>
      <Footer/>

       
    </div>
  )
}

export default App