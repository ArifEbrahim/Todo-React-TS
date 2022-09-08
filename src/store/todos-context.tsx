import { useState, FC, createContext, ReactNode } from 'react'
import Todo from '../models/todo'

type TodosContextObj = {
  items: Todo[]
  addTodo: (text: string) => void
  deleteTodo: (id: string) => void
}

type Props = {
  children: ReactNode
}

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {}
})

const TodosContextProvider: FC<Props> = props => {
  const [items, setItems] = useState<Todo[]>([])

  const addToDoHandler = (todoText: string): void => {
    const newToDo = new Todo(todoText)
    setItems(prevState => prevState.concat(newToDo))
  }

  const deleteToDoHandler = (todoId: string) => {
    setItems(prevState => prevState.filter(item => item.id !== todoId))
  }

  const contextValue: TodosContextObj = {
    items: items,
    addTodo: addToDoHandler,
    deleteTodo: deleteToDoHandler
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider
