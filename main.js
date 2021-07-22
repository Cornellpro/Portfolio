// show Nav-Menu for smaller screen
function navMenu() {
    document.getElementById("navMenu").classList.toggle("show-nav");
  }

// Hamburger menu toogle
  const menu = document.querySelector('.hamburger')

  menu.addEventListener('click', () => {
      menu.classList.toggle('open');
  })
