let toggled = false;
const dropdown = document.getElementById("dropdown");
const img = dropdown.getElementsByTagName('img')[0];
const nav = document.getElementsByTagName('nav')[0];

dropdown.addEventListener('click', () => {
    toggled = !toggled;
    if (toggled) {
        img.src = 'img/crossed.svg';
        nav.classList.add('h-36');
        nav.classList.remove('h-0');
        nav.classList.remove('opacity-0');
    } else {
        img.src = 'img/hamburger.svg';
        nav.classList.add('h-0');
        nav.classList.remove('h-36');
        nav.classList.add('opacity-0');
    }
});