class Card {
    constructor(element) {
        this.element = element;

        this.header = element.getElementsByClassName('title')[0];
        this.content = element.getElementsByClassName('content')[0];

        this.img = element.getElementsByClassName('pic')[0];
        this.text = element.getElementsByClassName('text')[0];
        this.chevron = this.header.getElementsByTagName('img')[0];
    }

    enable() {
        this.chevron.src = 'img/chevron-up.svg';

        this.img.classList.remove('w-0');
        this.text.classList.remove('max-h-32');
        this.element.classList.remove('max-h-48');
        this.header.classList.remove('h-14');

        this.img.classList.add('m-5');
        this.img.classList.add('w-48');
        this.text.classList.add('max-h-72');
        this.header.classList.add('h-20');
    }

    disable() {
        this.chevron.src = 'img/chevron-down.svg';

        this.img.classList.remove('m-5');
        this.img.classList.remove('w-48');
        this.text.classList.remove('max-h-72');
        this.header.classList.remove('h-20');

        this.img.classList.add('w-0');
        this.text.classList.add('max-h-32');
        this.element.classList.add('max-h-48');
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