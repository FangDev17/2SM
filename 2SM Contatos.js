const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

openMenu.addEventListener('click', () => {
    menu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('open');
});
