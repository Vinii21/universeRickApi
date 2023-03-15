import { useState, useEffect } from 'react'
import axios from 'axios'
import Seacrh from './components/Search'
import Location from './components/Location'
import logo from "./assets/logo.svg"
import Loader from './components/Loader'
import './App.css'

function App() {
  const [data, setData] = useState({})
  const [ loader, setLoader ] = useState(true)

 

  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random()*127)}`)
      .then((resp)=>{
        setData(resp.data) 
        setTimeout(()=>{
          setLoader(false)
        },2000)
      })
      .catch(
        error => console.error(error)
      )
  },[])

  return (
    <div className="App">
      {
        loader && <Loader />
      }
      <div className='header'>
       <img className='logo' src={logo} alt="Logo de Rick and Morty"/>
        <Seacrh 
          setData={setData}
        />
      </div>
      <div className='main'>
        <Location 
          data = {data}
        />
      </div>
    </div>
  )
}

export default App
