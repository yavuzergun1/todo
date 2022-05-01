import React from 'react'
import {useState} from 'react'

function TodoList({todos, setTodos, todo}) {



 


  return (
    <div className='main' > 
        
<input type="checkbox" className='toggle-all' /> <label htmlFor="toggle-all">Mark all as complete</label>
<ul className='todo-list'>
    {todos.map((todo)=>(
      <li key={todo.id} className={todo.completed ? 'completed':'' }> 
       <div className='view' > 
        <input type="checkbox" className='toggle' onClick={()=>setTodos(todos.map(item=>
     (item.id === todo.id ? {...item, completed:!item.completed}:item)))}  />
       <label > {todo.text} </label> 
       <button className='destroy' ></button>
        </div>
      </li>
    ))}
</ul>
    </div>
  )
}

export default TodoList