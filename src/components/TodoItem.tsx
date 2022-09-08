import React from 'react'
import classes from './ToDoItem.module.css'

const TodoItem:React.FC<{text: string, onDeleteTodo: () => void}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onDeleteTodo}>{props.text}</li>
  )
}

export default TodoItem