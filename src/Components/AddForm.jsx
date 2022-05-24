import React from 'react'

function AddForm(props) {
  return (
    <form onSubmit={props.submitForm}>
         <input value={props.currentTodo}  type="text" className='todo-input' placeholder="What's your plan for today" onChange={props.changeCurrentTodo}/>
         <button type='submit' className='btn add-btn'>Add {props.allTodos.length}</button>
    </form>
  )
}

export default AddForm
