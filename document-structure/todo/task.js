const ready = () => {
  const TaskInput = document.getElementById("task__input");
  const ButtonTaskAdd = document.getElementById("tasks__add");
  const TasksList = document.getElementById("tasks__list");

  const newTask = (title) => {
    const Task = document.createElement("div");
    const Title = document.createElement("div");
    const Delete = document.createElement("a");
    Task.classList.add("task");
    Title.classList.add("task__title");
    Delete.classList.add("task__remove");
    Title.innerText = title;
    Delete.innerHTML = "&times;";
    Delete.href = "#";
    Delete.onclick = onDeleteTask;
    Task.appendChild(Title);
    Task.appendChild(Delete);
    return Task;
  };

  const onAddTask = () => {
    if (TaskInput.value) {
      TasksList.appendChild(newTask(TaskInput.value));
      TaskInput.value = "";
    }
  };

  const onDeleteTask = (event) => {
    event.preventDefault();
    event.target.closest(".task").remove();
  };

  ButtonTaskAdd.onclick = onAddTask;

  document.getElementById("tasks__form").onsubmit = (event) => {
    event.preventDefault();
  };
};

document.addEventListener("DOMContentLoaded", ready);
