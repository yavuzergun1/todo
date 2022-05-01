import {useState} from 'react';
import './App.css';
import Form from "./comps/Form"
import TodoList from './comps/TodoList';
import Footer from './comps/Footer'

function App() {
  const [todos, setTodos]=useState([]);
  // console.log(Object.keys(todos));
  console.log(todos);
  // const deleteToDo= 
  return (
    <div className='todoapp'>
    
      <input type="checkbox" className='toggle-all' /> <label htmlFor="toggle-all">Mark all as complete</label>
      <Form todos={todos} setTodos={setTodos} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoList
          todo={todo}
          key={todo.id}
          text={todo.text}
          todos={todos}
          setTodos={setTodos}
          />
          ))}
      </ul>
       
          <Footer/>
    </div>
  )
}

export default App