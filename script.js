function generer(){

let cible = document.getElementById('cible').value;
let objectif = document.getElementById('objectif').value;
let role = document.getElementById('role').value;
let contexte = document.getElementById('contexte').value;
let contraintes = document.getElementById('contraintes').value;

let prompt = `Tu es ${role || "un professionnel social"}.`;

if(cible) prompt += ` Tu t’adresses à ${cible}.`;
if(objectif) prompt += ` Ta mission est de ${objectif}.`;
if(contexte) prompt += ` Contexte : ${contexte}.`;
if(contraintes) prompt += ` Contraintes : ${contraintes}.`;

prompt += " Donne une réponse concrète, adaptée terrain.";

document.getElementById('resultat').value = prompt;

// sauvegarde historique
let hist = JSON.parse(localStorage.getItem("croc")) || [];
hist.unshift(prompt);
localStorage.setItem("croc", JSON.stringify(hist));

afficherHistorique();
}

function copier(){
let txt = document.getElementById('resultat').value;
navigator.clipboard.writeText(txt);
alert("Copié !");
}

function reset(){
document.querySelectorAll("input").forEach(i=>i.value="");
document.getElementById("resultat").value="";
}

function afficherHistorique(){
let hist = JSON.parse(localStorage.getItem("croc")) || [];
let html = "";
hist.slice(0,5).forEach(p=>{
html += `<div>• ${p}</div>`;
});
document.getElementById("historique").innerHTML = html;
}

function suggestions(){
let role = document.getElementById('role').value;
let box = document.getElementById("suggestionsBox");

let text = "";

if(role==="Animateur"){
text="💡 Idée : créer un atelier ludique ou éducatif";
}
if(role==="Coordinateur"){
text="💡 Idée : structurer un projet avec partenaires";
}
if(role==="Directeur"){
text="💡 Idée : stratégie ou développement structure";
}
if(role==="Médiateur numérique"){
text="💡 Idée : atelier inclusion numérique";
}

box.innerHTML = text;
}

afficherHistorique();
