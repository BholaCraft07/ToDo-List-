import React, { useState } from 'react'
import './Todo.css'
function Todo({ todoData, isFinished, chnageFinished}) {
    const [finished, setFinished] = useState(isFinished)
    return (
        <>
            <div className="todo-wrapper">
                <input
                    type="checkbox"
                    checked={finished}
                    onChange={(e)=>{setFinished(e.target.checked)
                        chnageFinished(e.target.checked)
                    }}
                />
                <div className="">{todoData}</div>
                <button className='edit'>Edit</button>
                <button className='delete'>Delete</button>
            </div>
        </>
    )
}

export default Todo;