import './App.css'
import TodoList from './Component/TodoList/TodoList'
import AddTodo from './Component/AddTodo/AddTodo'
import { useReducer, useState } from 'react';
import TodoContext from './context/TodoContext';
import todoReducer from './Reducer/todoReducer';
import TodoDispatchContext from './context/TodoDispatchContext';

function App() {
  // const [list, setList] = useState([
  //   { id: 1, todoData: "todo 1", finished: false },
  // ]);
  const [list, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{dispatch}}>
        <div className="main-container">
          <h1>TodoList</h1>
          <AddTodo/>
          {/* <AddTodo updateList={
            (todo) => {
              dispatch({
                type: 'add_todo',
                payload: { todoText: todo }
              })
            }} /> */}
          <TodoList />
        </div>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
