const ready = () => {
  const dropdowns = [...document.querySelectorAll(".dropdown")];
  dropdowns.forEach((Dropdown) => {
    const Active = Dropdown.querySelector(".dropdown ul");
    const DropdownText = Dropdown.querySelector(".dropdown__value");

    const changeActive = () => {
      if (Active.classList.contains("dropdown__list_active")) {
        Active.classList.remove("dropdown__list_active");
      } else {
        Active.classList.add("dropdown__list_active");
      }
    };

    const setText = (value) => {
      DropdownText.textContent = value;
    };

    const onClick = (event) => {
      event.preventDefault();
      const text = event.target.textContent.trim();
      changeActive();
      setText(text);
    };

    Dropdown.addEventListener("click", onClick);
  });
};

document.addEventListener("DOMContentLoaded", ready);
