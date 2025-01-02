import React, { useState } from 'react'
import './Todo.css'

function Todo({ todoData, isFinished, chnageFinished, onDelete,onEdit}) {
    const [finished, setFinished] = useState(isFinished)
    const[isEditing,setIsEditing]=useState(false);
    const[EditText,setEditText]=useState(todoData);
    return (
        <>
            <div className="todo-wrapper">
                <input
                    type="checkbox"
                    checked={finished}
                    onChange={(e) => {
                        setFinished(e.target.checked)
                        chnageFinished(e.target.checked)
                    }}
                />
                <div className="show-data">{(isEditing)?(<input type="text" value={EditText} onChange={(e)=>setEditText(e.target.value)}/>):(<span>{todoData}</span>)}</div>
                <button className='edit' onClick={()=>{
                    setIsEditing(!isEditing);
                    onEdit(EditText);
                }}>{(!isEditing)?'Edit':'Save'}</button>
                <button className='delete' onClick={onDelete}>Delete</button>
            </div>
        </>
    )
}

export default Todo;