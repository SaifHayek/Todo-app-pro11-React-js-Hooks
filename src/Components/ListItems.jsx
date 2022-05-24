import React from 'react'
import Item from './Item'

function ListItems({todoItems}) {
  return (
    <ul className='list'>
        {todoItems} 
    </ul>
  )
}

export default ListItems
