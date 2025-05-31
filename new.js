var buttonPosition = document.getElementById("addTaskBtn");
var vitriINPUT = document.getElementById("taskInput");
var vitriu = document.getElementById("taskList");

buttonPosition.addEventListener("click", () => {
  console.log(1);
  var moi = document.createElement("li");
  moi.textContent = vitriINPUT.value;

  vitriu.appendChild(moi);
});
