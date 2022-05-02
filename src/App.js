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
    
      
      
      <Form todos={todos} setTodos={setTodos} />

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoList
          key={todo.id}
          todo={todo}
          text={todo.text}
          todos={todos}
          setTodos={setTodos}
          />
          ))}
      </ul>
     
          <Footer
          
          todos={todos}
          setTodos={setTodos}
          />
          
    </div>
  )
}

export default App