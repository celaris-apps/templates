import { component$, useSignal } from '@builder.io/qwik'

import celarisLogo from './assets/celaris.svg'
import './App.css'

export const App = component$(() => {
  const name = useSignal('')
  const greetMsg = useSignal('')

  async function greet() {
    window.greet(name()).then((res) => {
      greetMsg.set(res.message)
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

      <input id="greet-input" value={name} onInput={(e) => name.value = e.target.value} placeholder="Enter a name..." />
      <button type="submit" onClick={greet}>
        Greet
      </button>
      <p>{greetMsg}</p>
    </>
  )
})