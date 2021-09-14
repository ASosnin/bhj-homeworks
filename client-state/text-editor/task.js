const main = () => {
  const Editor = document.getElementById("editor");
  const Button = document.querySelector(".card__button");
  Editor.value = localStorage.getItem("editor");
  Editor.addEventListener("input", (event) => {
    localStorage.setItem("editor", event.target.value);
  });

  Button.onclick = () => {
    localStorage.removeItem("editor");
    Editor.value = "";
  };
};

document.addEventListener("DOMContentLoaded", main);
