document.addEventListener('DOMContentLoaded', () => {
    const burgerCheckbox = document.querySelector('.burger-checkbox');
    const menuList = document.querySelector('.menu-list');
    const menuItems = document.querySelectorAll('.menu-item');

    // Закрыть меню при клике на пункт меню
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            burgerCheckbox.checked = false; // Снимаем галочку с чекбокса
        });
    });

    // Закрыть меню при клике вне его области
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menuList.contains(event.target);
        const isClickOnBurger = event.target.matches('.burger') || burgerCheckbox.contains(event.target);

        // Если клик был вне меню и кнопки-бургера, закрыть меню
        if (!isClickInsideMenu && !isClickOnBurger) {
            burgerCheckbox.checked = false;
        }
    });
});
