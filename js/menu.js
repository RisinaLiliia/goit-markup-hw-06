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
    // Селектор футера
    footer: document.querySelector(".footer"),
    // Селектор иконки бургера
    burgerIcon: document.querySelector(".burger-icon"),
    // Селектор модального окна
    modal: document.querySelector(".backdrop"), // Добавьте селектор для модального окна
  };

  // Событие открытия меню
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  // Событие закрытия меню
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    // is-open - класс, который добавляется/убирается для открытия/закрытия меню
    refs.menu.classList.toggle("is-open");
    refs.openMenuBtn.classList.toggle("is-hidden");

    // Скрываем или показываем бургер-меню в зависимости от состояния
    if (refs.menu.classList.contains("is-open")) {
      refs.burgerIcon.style.display = "none"; // Скрываем бургер-меню
    } else {
      refs.burgerIcon.style.display = "block"; // Показываем бургер-меню
    }
  }

  // Добавляем обработчик события прокрутки
  window.addEventListener("scroll", () => {
    const footerRect = refs.footer.getBoundingClientRect();
    const isFooterVisible =
      footerRect.top <= window.innerHeight && footerRect.bottom >= 0;

    // Проверяем, виден ли футер
    if (isFooterVisible) {
      refs.burgerIcon.classList.add("footer-active"); // Добавляем класс для изменения цвета
    } else {
      refs.burgerIcon.classList.remove("footer-active"); // Убираем класс
    }

    // Управляем видимостью кнопки бургера
    if (window.scrollY > 100) {
      refs.openMenuBtn.classList.add("visible");
    } else {
      refs.openMenuBtn.classList.remove("visible");
    }
  });
})();
