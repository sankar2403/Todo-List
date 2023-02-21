import React from 'react'
import "../Todo/Todo.css"


const Todo = ({ data , value }) => {
   
    const deleteData = (id) =>{
        value(data.filter((item,index) => id !== index))
    }

    return (
        <>
            {
                data.map((item, index) => {
                    return (<div key={index} className='todo'>
                        <h2 className='item'>{item}</h2> 
                        <button onClick={()=> deleteData(index)} className="deleteTodo"><i class="fa-solid fa-trash"></i></button>
                    </div>)
                })
            }

        </>
    )
}

export default Todo