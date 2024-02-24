const img_width = 'w-72';
const img_height = 'h-48';
const img_margin = 'm-4';

const no_width = 'w-0';
const no_height = 'h-0';


class Card {
    constructor(element) {
        this.element = element;
        this.header = element.getElementsByClassName('title')[0];
        this.img = element.getElementsByClassName('pic')[0];
        this.chevron = this.header.getElementsByTagName('img')[0];
    }

    enable() {
        this.chevron.src = 'img/chevron-up.svg';

        this.img.classList.remove(no_width);
        this.img.classList.remove(no_height);

        this.header.classList.remove('h-14');

        this.img.classList.add(img_margin);
        this.img.classList.add(img_width);
        this.img.classList.add(img_height);

        this.header.classList.add('h-20');
    }

    disable() {
        this.chevron.src = 'img/chevron-down.svg';

        this.img.classList.remove(img_margin);
        this.img.classList.remove(img_width);
        this.img.classList.remove(img_height);
        
        this.header.classList.remove('h-20');

        this.img.classList.add(no_width);
        this.img.classList.add(no_height);
        this.header.classList.add('h-14');
    }
}

let active = null;

document.querySelectorAll('.card').forEach(element => {
    const card = new Card(element);

    card.header.addEventListener('click', () => {
        if (active === null) {
            active = card;
            card.enable();
        } else if (active != card) {
            active.disable();
            active = card;
            card.enable();
        } else {
            card.disable();
            active = null;
        }
    });
});