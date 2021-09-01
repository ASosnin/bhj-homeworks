function ready() {
  const reveals = [...document.querySelectorAll(".reveal")];

  const isInViewport = ({ top, bottom }) => {
    // Определяем что элемент полностью находится внутри viewport
    const viewportHeight = window.innerHeight;
    return top > 0 && viewportHeight > bottom;
  };

  reveals.forEach((Reveal) => {
    document.addEventListener("scroll", () => {
      isInViewport(Reveal.getBoundingClientRect())
        ? Reveal.classList.add("reveal_active")
        : Reveal.classList.remove("reveal_active");
    });
  });
}

document.addEventListener("DOMContentLoaded", ready);
