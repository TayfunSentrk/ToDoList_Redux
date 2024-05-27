import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import List from './components/List/List'
import Form from './components/Form/Form'

function App() {


  const [data,setData]=useState([]);

  return (
    <div className='container'>
    <Header/>
    <Form/>
        {data.length>0 && <List data={data}/>}  
    </div>
  )
}

export default App
