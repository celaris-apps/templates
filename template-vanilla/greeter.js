export function setupGreeter(element) {
  const message = document.getElementById('message')

  async function greet(name) {
    window.greet(name).then((res) => {
      message.innerHTML = res.message
    })
  }

  element.addEventListener('click', () => {
    const name = document.getElementById('greet-input').value
    greet(name)
  })
}
