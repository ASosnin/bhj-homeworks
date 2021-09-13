const main = () => {
  const PollTitle = document.getElementById("poll__title");
  const PollAnswers = document.getElementById("poll__answers");

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
  xhr.send();

  const renderQuestion = (data) => {
    PollTitle.innerText = data.data.title;
    data.data.answers.forEach((item) => {
      PollAnswers.innerHTML += `
       <button class="poll__answer">
        ${item}
      </button>
      `;
    });
    const ButtonAnswers = document.querySelectorAll(".poll__answer");
    console.log(ButtonAnswers);
    ButtonAnswers.forEach((item) => {
      item.onclick = function () {
        alert("Спасибо, Ваш голос засчитан!");
      };
    });
  };

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      renderQuestion(data);
    }
  });
};

document.addEventListener("DOMContentLoaded", main);
