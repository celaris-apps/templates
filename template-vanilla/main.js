import './style.css'
import celarisLogo from '/celaris.svg'
import { setupGreeter } from './greeter.ts'

document.querySelector('#app').innerHTML = `
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

setupCounter(document.querySelector('#greetBtn'))
