import React, { useState } from 'react'
import styles from "./Form.module.css"
const Form = () => {

    const [name,setName]=useState("");
    const [score,setScore]=useState("");
  return (
    <div className='container'>


        <form action="" >
            <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Yetkinlik İsmini Giriniz'/>
                <input type='number' value={score} onChange={(e)=>setScore(e.target.value)} max={10} min={1} placeholder='Lüften puanınızı giriniz'/>
            </div>

            <div>
                <button>Lütfen Onaylayınız</button>
            </div>
        </form>
    </div>
  )
}

export default Form
