import React from 'react'
import styles from "./List.module.css"
import ListItem from '../Item/ListItem'

const List = ({dataGet}) => {
  return (
    <div className={styles.container}>
          {
            dataGet.map((item)=><ListItem key={item.id} item={item}/>)
          }

            
    </div>
  )
}

export default List
