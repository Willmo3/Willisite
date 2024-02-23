let toggled = false;
const dropdown = document.getElementById("dropdown");
const img = dropdown.getElementsByTagName('img')[0];
const nav = document.getElementsByTagName('nav')[0];

dropdown.addEventListener('click', () => {
    toggled = !toggled;
    if (toggled) {
        img.src = 'img/crossed.svg';
        nav.classList.remove('mobile:hidden');
    } else {
        img.src = 'img/hamburger.svg';
        nav.classList.add('mobile:hidden');
    }
});