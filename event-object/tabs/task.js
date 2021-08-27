const ready = () => {
  const tabs = [...document.querySelectorAll(".tabs")];

  tabs.forEach((TabsContainer) => {
    const buttons = [...TabsContainer.querySelectorAll(".tab")];
    const contents = [...TabsContainer.querySelectorAll(".tab__content")];

    const clearActive = () => {
      TabsContainer.querySelector(".tab_active").classList.remove("tab_active");
      TabsContainer.querySelector(".tab__content_active").classList.remove(
        "tab__content_active"
      );
    };

    const updateCurrent = (event) => {
      clearActive();
      event.target.classList.add("tab_active");
      const idx = buttons.findIndex((item) => {
        return item.classList.contains("tab_active");
      });

      contents[idx].classList.add("tab__content_active");
    };

    buttons.forEach((item) => item.addEventListener("click", updateCurrent));
  });
};

document.addEventListener("DOMContentLoaded", ready);
