import React, { useRef, useContext } from 'react'
import { TodosContext } from '../store/todos-context'
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null)
  const todosCtx = useContext(TodosContext)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredText = textInputRef.current?.value

    if (enteredText?.trim().length === 0) {
      //throw error
    }

    if (enteredText) todosCtx.addTodo(enteredText)
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textInputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
