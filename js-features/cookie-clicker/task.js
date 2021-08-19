(function () {
  const cookie = document.getElementById("cookie");
  const counter = document.getElementById("clicker__counter");
  const speed = document.getElementById("clicker__speed");
  let lastDateClick = null;
  let clicksTotal = parseInt(counter.innerText.trim());
  let animationTimeout = null;

  cookie.onclick = function () {
    this.width = 220;
    const clickDate = new Date();
    clicksTotal += 1;
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }
    if (lastDateClick) {
      speed.innerText = (
        1 / parseFloat((clickDate - lastDateClick) / 1000)
      ).toFixed(2);
    }
    lastDateClick = clickDate;
    counter.innerText = clicksTotal;
    animationTimeout = setTimeout(() => {
      this.width = 200;
    }, 100);
  };
})();
