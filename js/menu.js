(() => {
  const refs = {
    // Кнопка открытия меню
    openMenuBtn: document.querySelector("[data-menu-open]"),
    // Кнопка закрытия меню
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    // Бекдроп меню
    menu: document.querySelector("[data-menu]"),
    // Ссылки навигации
    navLinks: document.querySelectorAll(".mobile-nav-list .nav-link"),
  };

  // Событие открытия меню
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  // Событие закрытия меню
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  // Добавляем обработчик событий для закрытия меню при нажатии на ссылки навигации
  refs.navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Функция для открытия/закрытия меню
  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
  }

  // Функция для закрытия меню
  function closeMenu() {
    refs.menu.classList.remove("is-open"); // Убираем класс is-open для закрытия меню
  }
})();
