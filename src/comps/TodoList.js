import React from 'react'

function TodoList({todos}) {
    
  return (
    <div>
        
<ul>
    {todos.map((todo, index)=>(
        <li key={index} id={index} >{todo} <button  >delete</button></li> 
        
    ))}
</ul>
    </div>
  )
}

export default TodoList