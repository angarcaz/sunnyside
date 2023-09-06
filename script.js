const toggleButton = document.querySelector('.burgerNav');
const globalNav = document.querySelector('.globalNav');

toggleButton.addEventListener('click', () => {
  globalNav.classList.toggle('open');
  const burgerIcon = toggleButton.querySelector('i.fas.fa-bars');
  const xIcon = toggleButton.querySelector('span');
  
  if (globalNav.classList.contains('open')) {
    burgerIcon.style.display = 'none';
    xIcon.style.display = 'inline';
  } else {
    burgerIcon.style.display = 'inline';
    xIcon.style.display = 'none';
  }
});
