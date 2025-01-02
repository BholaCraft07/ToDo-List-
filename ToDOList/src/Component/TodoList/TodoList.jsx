import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

function TodoList() {
    const { list, setList } = useContext(TodoContext);
    return (
        <div className="">
            {list.length > 0 &&
                list.map((todo) => (
                    <Todo
                        key={todo.id}
                        todoData={todo.todoData}
                        isFinished={todo.finished}
                        chnageFinished={(isFinished) => {
                            const updatedlist = list.map((item) => {
                                if (item.id == todo.id) {
                                    todo.finished = isFinished;
                                }
                                return item;
                            });
                            setList(updatedlist);
                        }}
                        onDelete={()=>{
                            const updatedlist = list.filter((item) => item.id !== todo.id);
                            setList(updatedlist);
                        }}
                        onEdit={(todoText)=>{
                            const updatedlist = list.filter((item) =>{
                                if(item.id === todo.id){
                                    item.todoData =todoText
                                }
                                return item;
                            })
                            setList(updatedlist);
                        }}
                        
                    />
                ))}
        </div>
    );
}

export default TodoList;
