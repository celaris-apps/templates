import { useState } from 'preact/hooks'
import celarisLogo from './assets/celaris.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [greetMsg, setGreetMsg] = useState('')

  async function greet() {
    window.greet(name).then((res) => {
      setGreetMsg(res.message)
    })
  }

  return (
    <>
      <div>
        <a href="https://celaris.cc/" target="_blank">
          <img src={celarisLogo} class="logo celaris" alt="Celaris logo" />
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
