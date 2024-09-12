# Celaris Templates 

This respository is a collection of custom Vite templates designed to demo how the Celaris C++ bindings work. 

Templates are used by the `celaris-cli` when building the project. There is no need to interact with these. 


## Contribution Guidelines. 

If you would like to add a new template for a different framework. Follow these guidelines. 

The naming structure should follow the pattern outlined in this codebase

* JavaScript `template-<framework>`
* TypeScript `template-<framework>-ts`

You must submit both a JavaScript and TypeScript variant.

Your template must follow the design of the existing templates. It should have the Celaris logo, a textbox, a button, and a greet message. When the user presses the button, it should send the value of the textbox to the Celaris binding and display the returned message. 

### Vue Example:
```ts
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const greetMsg = ref('')
const name = ref('')

async function greet() {
  window.greet(name.value).then((res) => {
    greetMsg.value = res.message
  })
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <form class="row" @submit.prevent="greet">
    <input id="greet-input" v-model="name" placeholder="Enter a name..." />
    <button type="submit">Greet</button>
  </form>

  <p>{{ greetMsg }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

```

## TypeScript Binding 

Celaris binds backend functions to the window object, but TypeScript has no idea of this. You should therefore include the files below

> You can copy and paste these from any of the existing templates

> In frameworks that don't use `src` directory, place these files wherever the main.ts file is. 

### src/types/index.ts
```ts
export type Greeting = {
  message: string
}
```

### src/bindings.d.ts

```ts
/**
 * Extend the global Window interface with custom bindings
 *
 * This provides TypeScript with the necessary type information to allow
 * the use of custom bindings in the global Window object.
 */

import { Greeting } from './types'

declare global {
  interface Window {
    greet(name: string): Promise<Greeting>
  }
}

// This export is here to ensure this file is treated as a module and not a script
export {}
```

### .gitignore

The `.gitignore` file should be name `_gitignore` as this is used by the CLI to merge with the exisiting `.gitignore` in the project at build time.



## Updating the CLI

For your framework to be visible to the CLI you must add the name of the framework to the frameworks.yaml You name should match the folder name (case-insensitive).

e.g.

* `template-react` == `React`
* `template-my-custom-template` == `My-Custom-Template`

