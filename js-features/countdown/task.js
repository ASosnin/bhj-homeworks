(function () {
  let seconds = null;
  const timer = document.getElementById("timer");

  const secondsFromString = (leftTimeString) => {
    const [hoursString, minutesString, secondsString] =
      leftTimeString.split(":");
    const hours = parseInt(hoursString);
    const minutes = parseInt(minutesString);
    const seconds = parseInt(secondsString);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const secondsToString = (total) => {
    return new Date(total * 1000).toISOString().substr(11, 8);
  };

  const download = (path, filename) => {
    const anchor = document.createElement("a");
    anchor.href = path;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  seconds = secondsFromString(timer.innerText.trim());

  const interval = setInterval(() => {
    seconds -= 1;
    timer.innerText = secondsToString(seconds);
    if (seconds === 0) {
      clearInterval(interval);
      download("/README.md", "readme.md");
      alert(`Вы победили в конкурсе!`);
    }
  }, 1000);
})();
