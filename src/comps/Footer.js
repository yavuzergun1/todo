import React from 'react'
import {useState} from 'react'

function Footer({todos, setTodos}) {
const unCompleted= todos.filter(todo=>todo.completed==false)

const clearCompleted= (e)=>{
    e.preventDefault()
    setTodos(todos.filter(todo=>todo.completed==false))
    console.log(unCompleted);
}

const clearUncompleted=(e)=>{
    e.preventDefault()
    setTodos(todos.filter(todo=>todo.completed==true))
}
    
  return (
   
<footer className="footer">

{/* <!-- This should be `0 items left` by default --> */}
<span className="todo-count">

    <strong>{unCompleted.length} </strong>
    items left
</span>

<ul className="filters">
    <li>
        <a className="selected">All</a>
    </li>
    <li>
        <a>Active</a>
    </li>
    <li>
        <a onClick={clearUncompleted}>Completed</a>
    </li>
</ul>

{/* <!-- Hidden if no completed items are left ↓ --> */}
<button className="clear-completed" onClick={clearCompleted}>
    Clear completed
</button>
</footer>




    
  )
}

export default Footer