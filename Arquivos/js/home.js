// SIDE MENU
const sideMenu = document.querySelector('.side_menu');
const menuFade = document.querySelector('.menu_fade');
const menuButtons = document.querySelectorAll('.menu_option');

const openMenuButton = document.querySelector('.menu_container');

// PROFILE MENU
const openProfileButton = document.querySelector('.profile_button.open');
const closeProfileButton = document.querySelector('.profile_button.close')
const profileMenu = document.querySelector('.profile_menu');

menuButtons.forEach(button => {

  button.addEventListener('click', (event) => {
   ChangePage(event);
  });

});

openProfileButton.addEventListener('click', (event) => {
   OpenProfileMenu();
   //window.location.href = "/Arquivos/pages/login.html";
});

closeProfileButton.addEventListener('click', (event) => {
   CloseProfileMenu();
})

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

function OpenProfileMenu () {
   profileMenu.classList.remove('hidden');
   openProfileButton.classList.add('hidden');
}

function CloseProfileMenu () {
   profileMenu.classList.add('hidden');
   openProfileButton.classList.remove('hidden');
}

function CloseMenu () {
   sideMenu.classList.add('hidden');
   menuFade.classList.add('hidden');
}

function OpenMenu () {
   CloseProfileMenu();
   sideMenu.classList.remove('hidden');
   menuFade.classList.remove('hidden');
}

console.log('Home.js Run')