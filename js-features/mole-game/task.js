(function () {
  const dead = document.getElementById("dead");
  const lost = document.getElementById("lost");
  let counterDead = parseInt(dead.innerText.trim());
  let counterLost = parseInt(lost.innerText.trim());

  function getHole(index) {
    return document.getElementById(`hole${index}`);
  }

  const updateCounters = () => {
    dead.innerText = counterDead;
    lost.innerText = counterLost;
  };

  const clean = () => {
    counterLost = 0;
    counterDead = 0;
  };

  function onHoleClick() {
    const classes = this.className.split(" ");
    if (classes.includes("hole_has-mole")) {
      counterDead += 1;
    } else {
      counterLost += 1;
    }
    if (counterDead === 10) {
      alert("Победа!");
      clean();
    } else if (counterLost === 5) {
      alert("Поражение!");
      clean();
    }
    updateCounters();
  }

  for (let i = 1; i <= 9; i += 1) {
    const hole = getHole(i);
    hole.onclick = onHoleClick;
  }
})();
