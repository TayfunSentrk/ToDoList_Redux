import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import List from './components/List/List'
import Form from './components/Form/Form'
import { useSelector } from 'react-redux'

function App() {

const dataGet=useSelector((storeData)=>storeData?.skill);



  return (
    <div className='container'>
    <Header/>
    <Form/>
        {dataGet?.length>0 && <List dataGet={dataGet}/>}  
    </div>
  )
}

export default App
