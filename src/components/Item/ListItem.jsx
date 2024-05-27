import React from 'react'
import styles from "./Item.module.css"
import { useDispatch } from 'react-redux'
import { skillRemoveById } from '../../redux/actions/skillAction';
const ListItem = ({item}) => {
const dispatch=useDispatch();

  return (
    <div className={styles.container}>
    <h3>{item.name}</h3>
    <h4>{item.score}</h4>
    <div className={styles.buttonDiv}>
        <button className={styles.delete} onClick={()=>dispatch(skillRemoveById(item.id))}>Sil</button>
        <button className={styles.update}>Düzenle</button>
    </div>
</div>
  )
}

export default ListItem
