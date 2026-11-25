const bouton = document.getElementById("calculer");
const prix = document.getElementById("prix");
const quantite = document.getElementById("quantite");
const resultat = document.getElementById("resultat");
bouton.addEventListener("click", function () {
let p =  Number(prix.value);
let q = Number(quantite.value);
console.log("le prix:",p)
console.log("le prix:",q)
let total = p + q;
console.log("le total:",total)
console.log("opération effectuée")
resultat.textContent = "Total : " + 0 + " DT";
});