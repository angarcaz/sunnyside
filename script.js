const toggleButton = document.querySelector('.burgerNav');
const globalNav = document.querySelector('.globalNav');

toggleButton.addEventListener('click', () => {
  globalNav.classList.toggle("open")
});