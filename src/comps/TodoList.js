import React from 'react'
import {useState} from 'react'

function TodoList({todos}) {
 const [isCompleted, setIsCompleted]=useState(false)

const changeClassName= (e)=> {(isCompleted== false ? setIsCompleted(true): setIsCompleted(false))}
  return (
    <div className='main' > 
        
<input type="checkbox" className='toggle-all' /> <label htmlFor="toggle-all">Mark all as complete</label>
<ul className='todo-list'>
    {todos.map((todo, index)=>(
      <li key={index} className={todo.isCompleted ? 'completed' :'' } > 
       <div className='view' > 
        <input type="checkbox" className='toggle' onChange={changeClassName} checked={changeClassName} />
       <label > {todo} </label> 
       <button className='destroy' ></button>
        </div>
      </li>
    ))}
</ul>
    </div>
  )
}

export default TodoList