
const data = {

cadrage:[
"Atelier pédagogique",
"Animation numérique",
"Projet éducatif",
"Formation",
"Création de contenu"
],

role:[
"Expert pédagogique",
"Formateur",
"Animateur numérique",
"Designer pédagogique",
"Rédacteur professionnel"
],

objectif:[
"Créer une activité",
"Créer un quiz",
"Expliquer un concept",
"Créer un jeu pédagogique",
"Rédiger un texte"
],

cible:[
"Enfants",
"Collégiens",
"Lycéens",
"Adultes",
"Seniors"
]

};


function remplirSelect(id,options){

const select=document.getElementById(id);

select.innerHTML='<option value="">Choisir...</option>';

options.forEach(o=>{

let opt=document.createElement("option");
opt.value=o;
opt.textContent=o;

select.appendChild(opt);

});

}


Object.keys(data).forEach(k=>{

remplirSelect(k,data[k]);

});


function genererPrompt(){

const c=document.getElementById("cadrage").value;
const r=document.getElementById("role").value;
const o=document.getElementById("objectif").value;
const t=document.getElementById("cible").value;
const d=document.getElementById("details").value;

const prompt=`
Tu es ${r}.

Contexte : ${c}.

Ta mission est de ${o} pour ${t}.

Contraintes :
${d}

Fournis une réponse structurée, claire et pédagogique.
`;

document.getElementById("resultat").textContent=prompt;

}


function copierPrompt(){

const text=document.getElementById("resultat").textContent;

navigator.clipboard.writeText(text);

alert("Prompt copié");

}


function telechargerPrompt(){

const text=document.getElementById("resultat").textContent;

const blob=new Blob([text],{type:"text/plain"});

const a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="prompt.txt";

a.click();

}
