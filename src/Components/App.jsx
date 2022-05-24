import React,{useState,useRef,useEffect} from 'react'
import AddForm from './AddForm'
import Header from './Header'
import Item from './Item'
import ListItems from './ListItems'

function App() {
  // states 
  let [currentTodo , setCurrentTodo] = useState('')
  let [allTodos , setAllTodos] = useState(JSON.parse(localStorage.getItem('allTodos')) || [])

  useEffect(() => {
    localStorage.setItem('allTodos',JSON.stringify(allTodos))
  },[allTodos])
  // events

  // update current Todo
  const changeCurrentTodo = (e) => {
     setCurrentTodo(e.target.value)
  }

  // submit form
  const submitForm = (e) =>{
    e.preventDefault()
      if(currentTodo != ''){
          setAllTodos([...allTodos,{id:Math.random(),title:currentTodo}])
          setCurrentTodo('')
      }
  }

  // delete Item 
  const deleteItem = (id) =>{
      setAllTodos([...allTodos.filter(todo => todo.id != id)])
  }


  // update item 
  const updateItem = (value,id) =>{
      let newTodos =  allTodos.map(todo => {
        if(todo.id == id){
          todo.title = value 
        }
        return todo
      })
      setAllTodos(newTodos)

  }

  const todoItems = allTodos.map(todo => <Item key={todo.id} info={todo} deleteItem={deleteItem} updateItem={updateItem}/>)
  return (
    <div>
        <Header/> 
        <AddForm changeCurrentTodo={changeCurrentTodo} submitForm={submitForm} currentTodo={currentTodo} allTodos = {allTodos}/>
        <ListItems todoItems = {todoItems}/>
    </div>
  )
}

export default App
