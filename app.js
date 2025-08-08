let input = document.querySelector("input");
let box = document.querySelector(".list");
let btn = document.querySelector("#btn");

function saveTask() {
  let allTasks = [];
  document.querySelectorAll(".list li").forEach(li => {
    allTasks.push(li.firstChild.textContent.trim());
  });
  localStorage.setItem("tasks", JSON.stringify(allTasks));
}

// Load tasks on page load
window.addEventListener("DOMContentLoaded", () => {
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => {
    let li = document.createElement("li");
    li.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => {
      li.remove();
      saveTask();
    });

    li.appendChild(deleteBtn);
    box.appendChild(li);
  });
});

// Add new task
btn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => {
      li.remove();
      saveTask();
    });

    li.appendChild(deleteBtn);
    box.appendChild(li);

    input.value = "";
    saveTask();
  }
});