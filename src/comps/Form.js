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
      <header className='header'> 
      <h1>todos</h1>
        <form >
          <input className='new-todo' value={form} placeholder="What needs to be done?" autoFocus 
          onChange={onChangeForm}/>
          <button onClick={onTodo} ></button>
        </form>
          </header>


    </div>
  )
}

export default Form