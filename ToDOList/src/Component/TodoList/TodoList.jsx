import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function TodoList() {
    const { list} = useContext(TodoContext);
    const{dispatch}=useContext(TodoDispatchContext);
    function onFinish(todo,isFinished){
        dispatch({type: "finish_todo",payload:{todo,isFinished}})
    }
    //before using reducer delete function
    // function onDelete(todo){
    //     const updatedlist = list.filter((item) => item.id !== todo.id);
    //     setList(updatedlist);
    // }
    //after using reducer delete function
    function onDelete(todo){
        dispatch({type:'delete_todo',payload:{todo}})
    }

    //before using reducer edit function
    // function onEdit(todoText,todo){
    //     const updatedlist = list.filter((item) =>{
    //         if(item.id === todo.id){
    //             item.todoData =todoText
    //         }
    //         return item;
    //     });
    //     setList(updatedlist);
    // }

    //after using reducer
    function onEdit(todoText,todo){
       dispatch({type:'edit_todo',payload:{todoText,todo}})
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
