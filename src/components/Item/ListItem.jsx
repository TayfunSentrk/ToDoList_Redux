import React from 'react'
import styles from "./Item.module.css"
const ListItem = () => {
  return (
    <div className='container'>
    <h3>{item.name}</h3>
    <h4>{item.score}</h4>
    <div className='buttonDiv'>
        <button>Sil</button>
        <button>Düzenle</button>
    </div>
</div>
  )
}

export default ListItem
