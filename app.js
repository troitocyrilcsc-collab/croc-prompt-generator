
const data={

context:[
"Atelier pédagogique",
"Cours interactif",
"Formation professionnelle",
"Création de contenu éducatif",
"Projet numérique"
],

role:[
"Expert pédagogique",
"Professeur",
"Formateur",
"Designer pédagogique",
"Créateur de contenu"
],

target:[
"Enfants",
"Collégiens",
"Lycéens",
"Étudiants",
"Adultes"
]

};

function fillSelect(id,list){

const select=document.getElementById(id);

select.innerHTML='<option value="">Choisir...</option>';

list.forEach(item=>{

const option=document.createElement("option");

option.value=item;
option.textContent=item;

select.appendChild(option);

});

}

fillSelect("context",data.context);
fillSelect("role",data.role);
fillSelect("target",data.target);


function generatePrompt(){

const context=document.getElementById("context").value;
const role=document.getElementById("role").value;
const target=document.getElementById("target").value;
const goal=document.getElementById("goal").value;
const constraints=document.getElementById("constraints").value;

const prompt=`
Tu es ${role}.

Contexte :
${context}

Objectif :
${goal}

Public cible :
${target}

Contraintes :
${constraints}

`;

document.getElementById("output").textContent=prompt;

}


function copyPrompt(){

const text=document.getElementById("output").textContent;

navigator.clipboard.writeText(text);

alert("Prompt copié");

}


function downloadPrompt(){

const text=document.getElementById("output").textContent;

const blob=new Blob([text],{type:"text/plain"});

const a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="prompt.txt";

a.click();

}


function savePrompt(){

const text=document.getElementById("output").textContent;

if(!text) return;

let saved=JSON.parse(localStorage.getItem("croc_prompts")||"[]");

saved.push(text);

localStorage.setItem("croc_prompts",JSON.stringify(saved));

loadPrompts();

}


function loadPrompts(){

const container=document.getElementById("savedPrompts");

container.innerHTML="";

let saved=JSON.parse(localStorage.getItem("croc_prompts")||"[]");

saved.forEach(p=>{

const div=document.createElement("div");
div.className="saved-item";

div.innerHTML=`<pre>${p}</pre>`;

container.appendChild(div);

});

}

loadPrompts();
