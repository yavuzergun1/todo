import React from 'react'
import { useState } from "react";

function Form({todos, setTodos}) {
const[form, setForm]= useState('')
const onChangeForm= (e)=>{setForm(e.target.value)}

  const onTodo= (e)=>{
    e.preventDefault();
    setTodos([...todos, form])
   
    setForm('')
  }

 
  
  return (
    <div>

<form>
			<input class="new-todo" placeholder="What needs to be done?" autofocus>
		</form>
      
        {/* <form >
          <input className='new-todo' value={form} placeholder="What needs to be done?" autoFocus 
          onChange={onChangeForm}/>
          <button onClick={onTodo} >Add</button>
        </form> */}


    </div>
  )
}

export default Form