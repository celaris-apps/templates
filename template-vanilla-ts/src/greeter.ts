export function setupGreeter(element: HTMLButtonElement) {
  const message = document.getElementById('message') as HTMLParagraphElement

  async function greet(name: string) {
    window.greet(name).then((res) => {
      message.innerHTML = res.message
    })
  }

  element.addEventListener('click', () => {
    const name = (document.getElementById('greet-input') as HTMLInputElement).value
    greet(name)
  })
}
