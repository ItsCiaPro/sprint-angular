const sideMenu = document.querySelector('.side_menu');
const menuFade = document.querySelector('.menu_fade');

const menuButtons = document.querySelectorAll('.menu_option');
const openMenuButton = document.querySelector('.menu_container');
const logoutButton = document.querySelector('.user_profile');

menuButtons.forEach(button => {

  button.addEventListener('click', (event) => {
   ChangePage(event);
  });

});

logoutButton.addEventListener('click', (event) => {
   window.location.href = "/Arquivos/pages/login.html";
});

openMenuButton.addEventListener('click', (event) => {
   OpenMenu();
});

function ChangePage (event) {
   const path = event.currentTarget.name

   if (path === "#" || path === "") {
      return CloseMenu()
   }

   window.location.href = event.currentTarget.name;
}

function CloseMenu () {
   sideMenu.classList.add('hidden');
   menuFade.classList.add('hidden');
}

function OpenMenu () {
   sideMenu.classList.remove('hidden');
   menuFade.classList.remove('hidden');
}

console.log('Home.js Run')