let burger = document.querySelector('.toggle');
let nav = document.querySelector('.header__nav');

burger.onclick = (event) => {
    nav.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
}

   
