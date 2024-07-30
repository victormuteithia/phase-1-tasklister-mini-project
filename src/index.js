document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmit(e.target.new_task_description.value)
    form.reset()
  })
  
});

function color(priority){
  switch(priority){
    case "high_priority":
      return "red";
    case "medium":
      return "yellow";
    case "low":
      return "green";
  }
}


function handleSubmit(todo){
  let li = document.createElement("li");
  let btn = document.createElement("button");
  let selectorValue = document.querySelector("#priority").value
  btn.textContent = "x";
  btn.addEventListener("click", handleDelete)
  li.style.color = color(selectorValue);
  li.textContent = `${todo} `;
  li.appendChild(btn)
  let ul = document.querySelector("#tasks")
  ul.appendChild(li);
  
}

function handleDelete(e){
  e.target.parentNode.remove()
}



