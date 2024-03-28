
import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import Title from './components/Title'

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/todos').then(async (res) => {
      const parsedData = await res.json()
      setTodos(parsedData.todoList)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className='App'>
      <Title/>
      <CreateTodo/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App
