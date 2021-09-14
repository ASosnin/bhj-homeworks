const getCookie = (name) => {
  if (!name) return undefined;
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, "\\$1") + "=([^;]*)"
    )
  );
  if (matches) {
    return decodeURIComponent(matches[1]);
  }

  return undefined;
};

const setCookies = (name, value) => {
  if (!name) return;
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
};

const main = () => {
  const Modal = document.getElementById("subscribe-modal");
  if (getCookie("subscribe") !== "true") {
    Modal.classList.add("modal_active");
  }
  Modal.querySelector(".modal__close").onclick = () => {
    Modal.classList.remove("modal_active");
    setCookies("subscribe", "true");
  };
};

document.addEventListener("DOMContentLoaded", main);
