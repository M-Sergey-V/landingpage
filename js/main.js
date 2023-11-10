// ------------------ Меню бургер ------------------------
const menuBtn = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__body');
const body = document.body;
menuBtn.addEventListener('click', function(event) {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');// Убираем прокрутку при открытом меню бургер
});

// ---------- Закрытие меню при клике на ссылку --------------
const list = document.querySelector('.menu__list');
list.addEventListener('click', function(event) {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

// ---------- Показать/скрыть хедер при прокрутке --------------
let lastScroll = 0;
const defaultOffset = 700;
const header = document.querySelector('.header');

const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }
    lastScroll = scrollPosition();
});

// ---------------- Стилизуем табы > TABS -----------------------
const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");
// Функция скрывает табы и убирает active у кнопок
function hidenTabs() {
   tabsItems.forEach(item => item.classList.add("hiden"));
   tabsBtns.forEach(item => item.classList.remove("active")); 
}
// Ф-я показывает переданный номер таба и делает соответствующую ему кнопку активной
function showTab(index) {
    tabsItems[index].classList.remove("hiden");
    tabsBtns[index].classList.add("active");
}
hidenTabs();
showTab(0);
tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hidenTabs();
    showTab(index);
}));