<script lang="ts">
  let name: string = ''
  let greetMsg: string = ''
  async function greet() {
    window.greet(name).then((res) => {
      greetMsg = res.message
    })
  }
</script>

<input id="greet-input" bind:value={name} placeholder="Enter a name..." />
<button type="submit" on:click={greet}>Greet</button>
<p>{ greetMsg }</p>