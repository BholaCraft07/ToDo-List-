import { useState } from "react";
import Todo from "../Todo/Todo";

function TodoList({ list, updateList }) {
  return (
    <div className="">
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            todoData={todo.todoData}
            isFinished={todo.finished}
            chnageFinished={(isFinished) => {
              const updatedlist=list.map((item) => {
                if (item.id == todo.id) {
                  todo.finished = isFinished;
                }
                return item;
              });
              updateList(updatedlist);
            }}
          />
        ))}
    </div>
  );
}

export default TodoList;
