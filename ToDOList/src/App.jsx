import './App.css'
import TodoList from './Component/TodoList/TodoList'
import AddTodo from './Component/AddTodo/AddTodo'
import { useState } from 'react';
import TodoContext from './context/TodoContext';

function App() {
  const [list, setList] = useState([
    { id: 1, todoData: "todo 1", finished: false },
  ]);
  return (
    <TodoContext.Provider value={{ list, setList }}>
      <div className="main-container">
        <h1>TodoList</h1>
        <AddTodo updateList={
          (todo) => setList([...list, { id: list.length + 1, todoData: todo, finished: false }])} />
        <TodoList/>
      </div>
    </TodoContext.Provider>
  )
}

export default App
