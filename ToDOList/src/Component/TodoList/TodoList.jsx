import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

function TodoList() {
    const { list, setList } = useContext(TodoContext);
    function onFinish(todo,isFinished){
        const updatedlist = list.map((item) => {
            if (item.id == todo.id) {
                todo.finished = isFinished;
            }
            return item;
        });
        setList(updatedlist);
    }
    function onDelete(todo){
        const updatedlist = list.filter((item) => item.id !== todo.id);
        setList(updatedlist);
    }
    function onEdit(todoText,todo){
        const updatedlist = list.filter((item) =>{
            if(item.id === todo.id){
                item.todoData =todoText
            }
            return item;
        })
        setList(updatedlist);
    }


    return (
        <div className="">
            {list.length > 0 &&
                list.map((todo) => (
                    <Todo
                        key={todo.id}
                        todoData={todo.todoData}
                        isFinished={todo.finished}
                        chnageFinished={(isFinished)=>onFinish(todo,isFinished)}
                        onDelete={()=>onDelete(todo)}
                        onEdit={(todoText)=>onEdit(todoText,todo)}
                        
                    />
                ))}
        </div>
    );
}

export default TodoList;
