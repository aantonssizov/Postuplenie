console.log('hello')

let btn = document.querySelector('.mobile-menu-btn');
let menu = document.querySelector('.header-menu');


if (btn) {

    btn.addEventListener('click', function() {
        if (menu.classList.contains("header-menu_visible")) {
            menu.classList.remove("header-menu_visible");
        } else {
            console.log('click');
            menu.classList.add('header-menu_visible');
        }
    })
}