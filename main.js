$(document).ready(function () {

  $(document).on('click', '.custom-toggle', function (e) {
      e.preventDefault();


      $('.custom-body').hide();
      
      var click_body = $(this).attr('data-board');
      
      $(click_body).show();

  });
});

// show Nav-Menu for smaller screen
function navMenu() {
    document.getElementById("navMenu").classList.toggle("show-nav");
  }

// Hamburger menu toogle
  const menu = document.querySelector('.hamburger')

  menu.addEventListener('click', () => {
      menu.classList.toggle('open');
  })
