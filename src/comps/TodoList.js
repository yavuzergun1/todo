import React from 'react'
import {useState} from 'react'

function TodoList({todos, setTodos, todo, text}) {






  return (
    <div className='main' > 
      

       
<ul className="todo-list">
      <li key={todo.id} className={todo.completed ? 'completed':'' }> 
       <div className='view' > 
        <input type="checkbox" className='toggle' onClick={ ()=>setTodos(todos.map(item=>
     (item.id === todo.id ? {...item, completed:!item.completed}:item)))}  />
       <label > {todo.text} </label> 
       <button className='destroy' ></button>
        </div>
      </li>
    </ul>

    </div>
  )
}

export default TodoList