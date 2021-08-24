const ready = () => {
  const menus = document.getElementsByClassName("menu_main");

  for (let menu of menus) {
    const subMenus = menu.getElementsByClassName("menu_sub");
    for (let subMenu of subMenus) {
      const link = subMenu.closest(".menu__item").querySelector(".menu__link");
      link.onclick = () => {
        const activeMenuItem = menu.querySelector(".menu_active");
        if (activeMenuItem) {
          activeMenuItem.classList.remove("menu_active");
        }
        subMenu.classList.add("menu_active");
        return false;
      };
    }
  }
};
document.addEventListener("DOMContentLoaded", ready);
