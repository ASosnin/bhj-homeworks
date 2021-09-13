const main = () => {
  const Loader = document.getElementById("loader");
  const Items = document.getElementById("items");
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://netology-slow-rest.herokuapp.com/");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      render(data);
    }
  });

  const render = (data) => {
    for (let valute in data.response.Valute) {
      const current = data.response.Valute[valute];
      Items.innerHTML += `
      <div class="item">
            <div class="item__code">
                ${current.CharCode}
            </div>
            <div class="item__value">
                ${current.Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
      `;
    }
    Loader.classList.remove("loader_active");
  };
};

document.addEventListener("DOMContentLoaded", main);
