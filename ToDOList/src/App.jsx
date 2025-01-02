import './App.css'
import TodoList from './Component/TodoList/TodoList'
import AddTodo from './Component/AddTodo/AddTodo'
import { useState } from 'react';

function App() {
  const [list, setList] = useState([
    { id: 1, todoData: "todo 1",finished:false},
    { id: 2, todoData: "todo 2",finished:false},
  ]);
  return (
    <div className="main-container">
      <h1>TodoList</h1>
      <AddTodo updateList={
        (todo)=>setList([...list,{id:list.length+1,todoData:todo,finished:false}])}/>
      <TodoList list={list} updateList={setList}/>
    </div>
  )
}

export default App
