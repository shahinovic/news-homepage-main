let menu = document.querySelector('.menu');
let close = document.querySelector('.close');

function toggle() {
    let list = document.querySelector('.phone-list');
    list.style.transform = 'translateX(0)'
    document.body.style = 'overflow-y: hidden;';
    // document.querySelector('.overlay').style = 'background-color: black; z-index: 100;';
} 

function closeMenu() {
    let list = document.querySelector('.phone-list');
    list.style.transform = 'translateX(6000px)';
    document.body.style = 'overflow-y: scroll;';
}

menu.addEventListener('click', toggle);
close.addEventListener('click', closeMenu)

