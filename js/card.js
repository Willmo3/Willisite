class Card {
    constructor(element) {
        this.element = element;
        this.img = element.getElementsByTagName('img')[0];
        this.content = element.getElementsByClassName('content')[0];
        this.header = element.getElementsByTagName('h1')[0];
    }

    enable() {
        this.img.classList.remove('max-h-0');
        this.content.classList.remove('max-h-32');
        this.element.classList.remove('max-h-48');
        this.header.classList.remove('h-14');

        this.img.classList.add('m-5');
        this.img.classList.add('max-h-48');
        this.content.classList.add('max-h-72');
        this.header.classList.add('h-20');
    }

    disable() {
        this.img.classList.remove('m-5');
        this.img.classList.remove('max-h-48');
        this.content.classList.remove('max-h-72');
        this.header.classList.remove('h-20');

        this.img.classList.add('max-h-0');
        this.content.classList.add('max-h-32');
        this.element.classList.add('max-h-48');
        this.header.classList.add('h-14');
    }
}

let active = null;

document.querySelectorAll('.card').forEach(element => {
    const card = new Card(element);

    element.addEventListener('mouseover', () => {
        if (active === null) {
            active = card;
            card.enable();
        }
    });

    element.addEventListener('click', () => {
        if (active === null) {
            active = card;
            card.enable();
        } else if (active != card) {
            active.disable();
            active = card;
            card.enable();
        }
    });
});