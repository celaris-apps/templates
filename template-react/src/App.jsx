import { useState, useEffect } from 'react'
import celarisLogo from './assets/celaris.svg'
import './App.css'

let eventListener = null
function App() {
  const [name, setName] = useState('')
  const [greetMsg, setGreetMsg] = useState('')


  async function greet() {
    window.greet(name).then((res) => {
      setGreetMsg(res.message)
    })
  }

  useEffect(() => {
    // Prevent multiple event listeners during 
    // development mode (known issue with <React.StrictMode>)
    if(eventListener !== null) return; 

    eventListener = window.addEventListener('message', (event) => {
      console.log('Received message:', event)
    })
  }, [eventListener])

  return (
    <>
      <div>
        <a href="https://celaris.cc/" target="_blank">
          <img src={celarisLogo} className="logo celaris" alt="Celaris logo" />
        </a>
      </div>
      <h1>Celaris</h1>

      <input id="greet-input" value={name} onInput={(e) => setName(e.target.value)} placeholder="Enter a name..." />
      <button type="submit" onClick={greet}>
        Greet
      </button>
      <p>{greetMsg}</p>
    </>
  )
}

export default App

