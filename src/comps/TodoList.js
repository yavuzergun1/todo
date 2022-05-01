import React from 'react'
import {useState} from 'react'

function TodoList({todos, setTodos, todo, text, id}) {

const isCompleted= ()=>setTodos(todos.map(item=>
  (item.id === todo.id ? {...item, completed:!item.completed}:item)))


  return (
    <div className='main' > 
{/* <input type="checkbox" className='toggle-all' /> <label htmlFor="toggle-all">Mark all as complete</label> */}

      
      <li key={todo.id} className={todo.completed ? 'completed':'' }> 
       <div className='view' > 
        <input type="checkbox" className='toggle' onClick={isCompleted}  />
       <label key={todo.id} > {text} </label> 
       <button className='destroy' ></button>
        </div>
      </li>
   

    </div>
  )
}

export default TodoList