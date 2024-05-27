import React from 'react'
import styles from "./Item.module.css"
const ListItem = ({item}) => {
  return (
    <div className={styles.container}>
    <h3>{item.name}</h3>
    <h4>{item.score}</h4>
    <div className={styles.buttonDiv}>
        <button className={styles.delete}>Sil</button>
        <button className={styles.update}>Düzenle</button>
    </div>
</div>
  )
}

export default ListItem
