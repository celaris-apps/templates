import './style.css'
import celarisLogo from '/celaris.svg'
import { setupGreeter } from './greeter.ts'

window.addEventListener('message', (event) => {
  console.log('Received message:', event)
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <a href="https://celaris.cc/" target="_blank">
      <img src="${celarisLogo}" class="logo celaris" alt="Celaris logo" />
    </a>
    
    <h1>Celaris</h1>
    <input id="greet-input" placeholder="Enter a name..." />
    <button id="greetBtn" type="submit">Greet</button>

    <p id="message"></p>
  </div>
`

setupGreeter(document.querySelector<HTMLButtonElement>('#greetBtn')!)
