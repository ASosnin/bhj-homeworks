const main = () => {
  const Signin = document.getElementById("signin");
  const Form = document.getElementById("signin__form");
  const Button = document.getElementById("signin__btn");
  const Welcome = document.getElementById("welcome");
  const User = document.getElementById("user_id");

  try {
    const user = JSON.parse(localStorage.getItem("user"));
    Welcome.classList.add("welcome_active");
    User.innerText = user.id;
    Signin.classList.remove("signin_active");
  } catch (e) {
    Welcome.classList.remove("welcome_active");
    Signin.classList.add("signin_active");
  }

  Button.addEventListener("click", (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append("login", Form.elements.login.value);
    formData.append("password", Form.elements.password.value);

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);
    xhr.onload = () => {
      try {
        let res = JSON.parse(xhr.responseText);
        if (res.success) {
          Signin.classList.remove("signin_active");
          Welcome.classList.add("welcome_active");
          User.innerText = res.user_id;
          localStorage.setItem("user", JSON.stringify({ id: res.user_id }));
        } else {
          alert("Неверный логин/пароль");
        }
      } catch (error) {
        console.log(error);
      } finally {
        Form.reset();
      }
    };
  });
};

document.addEventListener("DOMContentLoaded", main);
