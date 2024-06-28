class TopCard {
    constructor(element) {
        this.element = element;
        this.header = element.getElementsByClassName('title')[0];
        this.img = element.querySelectorAll('scaled_img')[0];
        this.chevron = this.header.getElementsByTagName('img')[0];
    }

    enable() {
        if (this.chevron) {
            this.chevron.src = 'img/chevron-up.svg';
        }

        if (this.img) {
            this.img.classList.remove(no_width);
            this.img.classList.remove(no_height);

            this.img.classList.add(img_margin);
            this.img.classList.add(img_width);
            this.img.classList.add(img_height);

            this.img.alt = "up chevron"
        }

        if (this.header) {
            this.header.classList.remove('h-14');
            this.header.classList.add('h-20');
        }
    }

    disable() {
        if (this.chevron) {
            this.chevron.src = 'img/chevron-down.svg';
        }

        if (this.img) {
            this.img.classList.remove(img_margin);
            this.img.classList.remove(img_width);
            this.img.classList.remove(img_height);

            this.img.classList.add(no_width);
            this.img.classList.add(no_height);
            this.img.alt = "down chevron"
        }

        if (this.header) {
            this.header.classList.remove('h-20');
            this.header.classList.add('h-14');
        }
    }
}