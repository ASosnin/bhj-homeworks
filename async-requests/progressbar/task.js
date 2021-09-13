const main = () => {
  const Progress = document.getElementById("progress");
  const Form = document.getElementById("form");

  Form.addEventListener("submit", function (event) {
    event.preventDefault();
    const input = Form.elements.file;
    const file = input.files[0];

    if (file) {
      upload(file);
    }
  });

  function upload(file) {
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function (event) {
      Progress.setAttribute("max", event.total);
      Progress.value = event.loaded;
    };

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(file);
  }
};

document.addEventListener("DOMContentLoaded", main);
