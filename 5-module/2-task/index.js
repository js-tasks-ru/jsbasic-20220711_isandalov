function toggleText() {
  let hideButton = document.querySelector('.toggle-text-button')
  let hideText = document.getElementById('text')
  hideButton.addEventListener('click', () => {
    if (!hideText.hasAttribute('hidden')) {
      hideText.setAttribute('hidden', '')
      }
    else {
      hideText.removeAttribute('hidden', '')
    }
  })

}
