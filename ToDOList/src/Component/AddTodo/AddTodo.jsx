import React, { useState } from 'react'
import './AddTodo.css';
function AddTodo({updateList}) {
    const[inputText,setInputText] = useState('');
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
                updateList(inputText);
                setInputText('');
               }
            }}>Add</button>
        </div>
    )
}

export default AddTodo