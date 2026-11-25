const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
const text = taskInput.value.trim();
if (text === "") {
alert("Veuillez saisir une tâche !");
return;
}
// Créer de nouveaux éléments pour chaque tâche
const li = document.createElement("li");
const check = document.createElement("span");
const span = document.createElement("span");
const deleteBtn = document.createElement("button");

// Définir les classes CSS
check.className = "task-check";
span.className = "task-text";
deleteBtn.className = "delete-btn";

// Ajouter le texte dans le span
span.textContent = text;
deleteBtn.textContent = "×";

// Ajouter les éléments dans le bon ordre
li.appendChild(check);
li.appendChild(span);
li.appendChild(deleteBtn);
taskList.appendChild(li);

// Cocher ou décocher la tâche
check.addEventListener("click", function () {
li.classList.toggle("completed");
});
deleteBtn.addEventListener("click", function () {
li.remove();
});
console.log("Tâche ajoutée :", text);
// Vider le champ de saisie
taskInput.value = "";
}
addBtn.addEventListener("click", addTask);