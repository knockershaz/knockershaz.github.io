import React from 'react'

export const ToDo = ({todo,onDelete}) => {
  return (
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
