const ready = () => {
  const Tooltip = document.querySelector(".tooltip");
  const elementsHasTooltip = document.querySelectorAll(".has-tooltip");

  const hideTooltip = () => {
    Tooltip.classList.remove("tooltip_active");
    Tooltip.style.top = `0px`;
    Tooltip.style.left = `0px`;
    Tooltip.innerText = "";
  };

  const showTooltip = (element) => {
    if (element.title === Tooltip.innerText) {
      hideTooltip();
    } else {
      const { left, bottom } = element.getBoundingClientRect();
      Tooltip.style.top = `${bottom}px`;
      Tooltip.style.left = `${left}px`;
      Tooltip.innerText = element.title;
      Tooltip.classList.add("tooltip_active");
    }
  };

  elementsHasTooltip.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      showTooltip(event.target);
    });
  });
};

document.addEventListener("DOMContentLoaded", ready);
