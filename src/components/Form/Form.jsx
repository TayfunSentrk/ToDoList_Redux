import React, { useState } from 'react'
import styles from "./Form.module.css"
import { useDispatch } from 'react-redux';
import { skillAd } from '../../redux/actions/skillAction';


const Form = () => {

    const [name,setName]=useState("");
    const [score,setScore]=useState("");
    const dispatch=useDispatch();

    const submit=(e)=>{
        e.preventDefault();
        if(!name || !score) return;
        dispatch(skillAd({name,score}))
        setName("");
        setScore("");

    }   
  return (
    <div className={styles.container}>


        <form onSubmit={submit} >
            <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Yetkinlik İsmini Giriniz'/>
                <input type='number' value={score} onChange={(e)=>setScore(e.target.value)} max={10} min={1} placeholder='Lüften puanınızı giriniz'/>
            </div>

            <div>
                <button type='submit'>Lütfen Onaylayınız</button>
            </div>
        </form>
    </div>
  )
}

export default Form
