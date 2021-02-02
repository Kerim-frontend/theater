const root = document.getElementById('root');
import { header } from './header.js';
import {slider} from './slider.js';
import {about} from './about.js';
import {productions} from './productions.js';
import {rating} from './rating.js';
import {partners} from './partners.js';
import {footer} from './footer.js';
import {pixedPanel} from './fixedPanel.js';



header()
slider();
about();
productions()
rating();
partners()
footer();
pixedPanel();

let btn =  document.querySelector('.menu__btn');
let list = document.querySelector('.nav');

btn.addEventListener('click', function () {
    this.classList.toggle('menu__btn--active')
    list.classList.toggle('nav--active')
});

list.addEventListener('click', function () {
    this.classList.remove('nav--active')
    btn.classList.remove('menu__btn--active')
});

