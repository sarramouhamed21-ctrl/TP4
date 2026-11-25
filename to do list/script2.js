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
const tr = document.createElement("tr");
const span = document.createElement("span");
const deleteBtn = document.createElement("button");

// Définir les classes CSS

span.className = "task-text";
deleteBtn.className = "delete-btn";

// Ajouter le texte dans le span
span.textContent = text;
deleteBtn.textContent = "×";

// Ajouter les éléments dans le bon ordre

tr.appendChild(span);
tr.appendChild(deleteBtn);
taskList.appendChild(tr);

// Cocher ou décocher la tâche

deleteBtn.addEventListener("click", function () {
tr.remove();
});
console.log("Tâche ajoutée :", text);
// Vider le champ de saisie
taskInput.value = "";
}
addBtn.addEventListener("click", addTask);