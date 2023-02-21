import React, { useState ,useRef } from 'react';
import Todo from '../Todo/Todo';
import "../Input/Input.css"



const Input = () => {

    const [text, setText] = useState([]);
    const [todo, setTodo] = useState("");
    const active = useRef()

    const handleSubmit = () => {
        if(todo !== ""){
            setText([...text, todo])
            setTodo("")
            active.current.focus();
        }
        else{
            alert("Input Should not be empty")
        }
    }

    return (
        <div className='main-container'>
            <h2 className="header">TODOS</h2>
            <div className='container'>
                <input className='inputTag' type="text" value={todo} onChange={(event) => setTodo(event.target.value)}  ref={active}/>
                <button onClick={() => handleSubmit()} className="addButton"><i class="fa-solid fa-plus"></i></button>
            </div>
            <div className='sub_container'>
                <Todo data={text} value={setText} />
            </div>
        </div>
    )
}

export default Input