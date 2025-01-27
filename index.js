// Sélectionner un élément avec son ID
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");



// Quiz
const response = document.querySelector("p");

btn1.addEventListener("click",  () => {
    response.classList.add("show-response");
    response.style.background = "red";
})

btn2.addEventListener("click",  () => {
    response.classList.add("show-response");
    response.style.background = "green";
})



// Formulaire = Form events
const inputTexte = document.querySelector("input[type='text']");
let texte = "";
inputTexte.addEventListener("input", (e) => {
    console.log(e.target.value);
    texte = e.target.value;
})

console.log(texte);


// Validation du formulaire
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    // Supprime la fonctionnalité native de l'élément ciblé
    e.preventDefault();

    // On insère du HTML avec JS dans une div
    document.querySelector("form > div").innerHTML = `
    <h3> Texte : ${texte}</h3>`
})
