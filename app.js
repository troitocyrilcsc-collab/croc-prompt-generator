
const data={

contexte:[
"Atelier pédagogique",
"Formation",
"Création de contenu éducatif",
"Projet numérique",
"Cours interactif"
],

role:[
"Expert pédagogique",
"Professeur",
"Formateur",
"Designer pédagogique",
"Créateur de contenus"
],

cible:[
"Enfants",
"Collégiens",
"Lycéens",
"Étudiants",
"Adultes"
]

};


function fillSelect(id,items){

const select=document.getElementById(id);

select.innerHTML='<option value="">Choisir...</option>';

items.forEach(i=>{

const opt=document.createElement("option");
opt.value=i;
opt.textContent=i;

select.appendChild(opt);

});

}

fillSelect("contexte",data.contexte);
fillSelect("role",data.role);
fillSelect("cible",data.cible);


function generatePrompt(){

const contexte=document.getElementById("contexte").value;
const role=document.getElementById("role").value;
const cible=document.getElementById("cible").value;
const objectif=document.getElementById("objectif").value;
const contraintes=document.getElementById("contraintes").value;

const prompt=`
Tu es ${role}.

Contexte :
${contexte}

Objectif :
${objectif}

Public cible :
${cible}

Contraintes :
${contraintes}

Structure ta réponse en étapes pédagogiques claires.
`;

document.getElementById("result").textContent=prompt;

}


function copyPrompt(){

const text=document.getElementById("result").textContent;

navigator.clipboard.writeText(text);

alert("Prompt copié");

}


function downloadPrompt(){

const text=document.getElementById("result").textContent;

const blob=new Blob([text],{type:"text/plain"});

const a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="prompt.txt";

a.click();

}


function savePrompt(){

const text=document.getElementById("result").textContent;

if(!text) return;

let saved=JSON.parse(localStorage.getItem("prompts")||"[]");

saved.push(text);

localStorage.setItem("prompts",JSON.stringify(saved));

loadSaved();

}


function loadSaved(){

const container=document.getElementById("savedPrompts");

container.innerHTML="";

let saved=JSON.parse(localStorage.getItem("prompts")||"[]");

saved.forEach(p=>{

const div=document.createElement("div");
div.className="saved-item";

div.innerHTML=`<pre>${p}</pre>`;

container.appendChild(div);

});

}

loadSaved();
