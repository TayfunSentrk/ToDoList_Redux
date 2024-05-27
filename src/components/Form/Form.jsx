import React from 'react'
import styles from "./Form.module.css"
const Form = () => {
  return (
    <div className='container'>
        <form action="">
            <div>
                <input type="text"  placeholder='Yetkinlik İsmini Giriniz'/>
                <input type='text' max={10} min={1} placeholder='Lüften puanınızı giriniz'/>
            </div>

            <div>
                <button>Lütfen Onaylayınız</button>
            </div>
        </form>
    </div>
  )
}

export default Form
