const lodding = document.querySelector('#lodding');
const block__1 = document.querySelector('.block__one')
const block2 = document.querySelector('.new')
const service__text = document.querySelector('.service__text')
const cardlist = document.querySelector('.card__list')
const navbar = document.querySelector('.nav')
setTimeout(() => {
    lodding.style.display = 'none'
}, 1700);

setTimeout(() => {
    navbar.classList.remove('nvarbar_on')
    navbar.classList.add('nvarbar_off')
}, 2000);

setTimeout(() => {
    block__1.classList.remove('block__1')
    block__1.classList.add('go')
    block2.classList.remove('block__2')
    block2.classList.add('go')
    
}, 3000);

setTimeout(() => {
    service__text.classList.remove('now-now')
    service__text.classList.add('off_taht')

}, 4000);

setTimeout(() => {
cardlist.classList.remove('left_card')
cardlist.classList.add('right_card')
}, 4500);
