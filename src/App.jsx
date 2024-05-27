import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import List from './components/List/List'

function App() {


  const [data,setData]=useState([]);

  return (
    <>
    <Header/>

        {data.length>0 && <List data={data}/>}  
    </>
  )
}

export default App
