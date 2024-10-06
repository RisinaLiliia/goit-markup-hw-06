(() => {
  const refs = {
    // Кнопка открытия меню
    openMenuBtn: document.querySelector("[data-menu-open]"),
    // Кнопка закрытия меню
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    // Бекдроп меню
    menu: document.querySelector("[data-menu]"),
    // Ссылки в навигации
    navLinks: document.querySelectorAll(".mobile-nav-list .nav-link"),
  };

  // Событие открытия меню
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  // Событие закрытия меню
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    // is-open - класс, который добавляется/убирается для открытия/закрытия меню
    refs.menu.classList.toggle("is-open");
    refs.openMenuBtn.classList.toggle("is-hidden");
  }
})();
