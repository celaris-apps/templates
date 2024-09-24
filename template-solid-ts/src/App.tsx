import { createSignal, onMount } from 'solid-js'
import celarisLogo from './assets/celaris.svg'
import './App.css'

function App() {
  const [name, setName] = createSignal('')
  const [greetMsg, setGreetMsg] = createSignal('')

  async function greet() {
    window.greet(name()).then((res) => {
      setGreetMsg(res.message)
    })
  }

  onMount(() => {
    window.addEventListener('message', (event) => {
      console.log('Received message:', event)
    })
  })

  return (
    <>
      <div>
        <a href="https://celaris.cc/" target="_blank">
          <img src={celarisLogo} class="logo celaris" alt="Celaris logo" />
        </a>
      </div>
      <h1>Celaris</h1>

      <input id="greet-input" value={name()} onInput={(e) => setName((e.target as HTMLInputElement).value)} placeholder="Enter a name..." />
      <button type="submit" onClick={() => greet()}>
        Greet
      </button>
      <p>{greetMsg()}</p>
    </>
  )
}

export default App
