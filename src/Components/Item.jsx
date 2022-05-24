import React,{Fragment,useState,useRef} from 'react'

function Item(props) {
  let [editStatus,setEditStatus] = useState(false)
  let updateInputRef = useRef()
  const showItem = () =>{
    return (
        <li className='item'>
            <div className='item-text'>{props.info.title}</div>  
            <div className="buttons">
                <button className='btn delete-btn' onClick={() => props.deleteItem(props.info.id)}>Delete</button>
                <button className='btn edit-btn' onClick={() => setEditStatus(!editStatus)}>Edit</button>
            </div>
    
        </li>
    )
  }
  const submitUpdateForm = (e) =>{
        e.preventDefault()
        setEditStatus(!editStatus)
  }
  const updateForm =() =>{
      return (
          <li >
              <form className='item' onSubmit={submitUpdateForm}>
                    <input type="text" ref={updateInputRef}  className='edit-input' defaultValue={props.info.title} />
                    <button type='submit' className='btn update-btn' onClick={() => props.updateItem(updateInputRef.current.value,props.info.id)}>Update</button>
              </form>

          </li>
      )
  }
  return (
    <Fragment>
        {editStatus ? updateForm() : showItem()}
    </Fragment>
  )
}

export default Item
