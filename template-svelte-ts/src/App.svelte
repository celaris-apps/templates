<script lang="ts">
  import celarisLogo from './assets/celaris.svg'
  import Greeter from './lib/Greeter.svelte'
</script>

<main>
  <div>
    <a href="https://celaris.cc/" target="_blank">
      <img src={celarisLogo} class="logo celaris" alt="Celaris logo" />
    </a>
  </div>
  <h1>Celaris</h1>

  <div class="card">
    <Greeter />
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
