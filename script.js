// == HEADER & FOOTER SCRIPTS JQUERY =================
// <script>
//    $(function(){
//    $("#header").load("header.html");
//    $("#upper_footer").load("upper_footer.html");
//    $("#footer").load("footer.html");
//});
// </script>

// == MENU BURGER SCRIPT ==============================
const menuBtn = document.querySelector('.header__item-right--menu');
const menu = document.querySelector('.menu');
const menuCloseBtn = document.querySelector('.menu__btn-close');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-hidden');
});
menuCloseBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-hidden');
});