function todoReducer(state, action) {
    if (action.type == "add_todo") {
        let todoText = action.payload.todoText;
        return [
            ...state,
            {
                id: state.length + 1,
                todoData: todoText,
                finished: false,
            },
        ];
    } else if (action.type == "delete_todo") {
        let todo = action.payload.todo;
        const updatedlist = state.filter((item) => item.id !== todo.id);
        return updatedlist;
    } else if (action.type == "edit_todo") {
        let todoText = action.payload.todoText;
        let todo = action.payload.todo;
        const updatedlist = state.filter((item) => {
            if (item.id === todo.id) {
                item.todoData = todoText;
            }
            return item;
        });
        return updatedlist;
    }
    else if(action.type=='finish_todo'){
        let todo=action.payload.todo;
        let isFinished=action.payload.isFinished
        const updatedlist = state.map((item) => {
            if (item.id == todo.id) {
                todo.finished = isFinished;
            }
            return item;
        });
        return updatedlist;
    }
}

export default todoReducer;
