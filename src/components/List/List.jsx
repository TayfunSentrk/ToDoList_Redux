import React from 'react'
import styles from "./List.module.css"
import ListItem from '../Item/ListItem'

const List = ({data}) => {
  return (
    <div className='container'>
          {
            data.map((item)=><ListItem key={item.id} item={item}/>)
          }

            
    </div>
  )
}

export default List
