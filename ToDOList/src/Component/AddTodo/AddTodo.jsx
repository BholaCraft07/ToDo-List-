import React, { useContext, useState } from 'react'
import './AddTodo.css';
import TodoDispatchContext from '../../context/TodoDispatchContext';
function AddTodo() {
    const[inputText,setInputText] = useState('');
    const{dispatch}=useContext(TodoDispatchContext);
    return (
        <div className="addTodo-wrapper">
            <input
             type="text" 
             placeholder='add your next todo'
             value={inputText}
             onChange={e=>setInputText(e.target.value)}
            />
            <button 
            onClick={()=>{
               if(inputText.trim()!==''){
                dispatch({type:'add_todo',
                    payload:{todoText:inputText}
                })
                setInputText('');
               }
            }}>Add</button>
        </div>
    )
}

export default AddTodo