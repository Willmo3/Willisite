let toggled = false;
const dropdown = document.getElementById("dropdown");
const img = dropdown.getElementsByTagName('img')[0];

dropdown.addEventListener('click', () => {
    toggled = !toggled;
    if (toggled) {
        img.src = 'img/crossed.svg';
    } else {
        img.src = 'img/hamburger.svg';
    }
});