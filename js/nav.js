let toggled = false;
const dropdown = document.getElementById("dropdown");
const img = dropdown.getElementsByTagName('img')[0];
const nav = document.getElementsByTagName('nav')[0];

dropdown.addEventListener('click', () => {
    toggled = !toggled;
    if (toggled) {
        img.src = 'img/crossed.svg';
        nav.classList.add('mobile:h-36');
        nav.classList.remove('mobile:h-0');
        nav.classList.remove('mobile:opacity-0');
    } else {
        img.src = 'img/hamburger.svg';
        nav.classList.add('mobile:h-0');
        nav.classList.remove('mobile:h-36');
        nav.classList.add('mobile:opacity-0');
    }
});