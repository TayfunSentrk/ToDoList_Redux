import React, { useEffect, useState } from 'react'
import styles from "./Form.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { skillAd, skillUpdate } from '../../redux/actions/skillAction';


const Form = () => {
    const skill=useSelector((store)=>store.updateSkill)
 
    const [name,setName]=useState("");
    const [score,setScore]=useState("");
    const dispatch=useDispatch();

    useEffect(()=>{
        setName(skill.name);
        setScore(skill.score);

    },[skill])


    const submit=(e)=>{
        e.preventDefault();
        if(!name || !score) return;
        if(skill.name!=="" && skill.score!==""){
            dispatch(skillUpdate({name,score,id:skill.id}))
        }

        else{
            dispatch(skillAd({name,score}))
        }

      
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
                <button type='submit'>{skill.name!==""?"Güncelleyiniz":"Ekleyiniz"}</button>
            </div>
        </form>
    </div>
  )
}

export default Form
