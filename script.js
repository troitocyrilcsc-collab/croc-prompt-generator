let selections={role:'',ton:''};

function select(btn,type){
document.querySelectorAll(`#${type} button`).forEach(b=>b.classList.remove('active'));
btn.classList.add('active');
selections[type]=btn.innerText;
}

function generer(){
let prompt=`Tu es ${selections.role||"un expert"}.`;

let objectif=document.getElementById('objectif').value;
let contexte=document.getElementById('contexte').value;
let contraintes=document.getElementById('contraintes').value;

if(objectif)prompt+=` Ta mission est de ${objectif}.`;
if(contexte)prompt+=` Le contexte est le suivant : ${contexte}.`;
if(contraintes)prompt+=` Tu dois respecter : ${contraintes}.`;
if(selections.ton)prompt+=` Adopte un ton ${selections.ton}.`;

prompt+=" Fournis une réponse claire et exploitable.";

document.getElementById('resultat').value=prompt;
}

function copier(){
let txt=document.getElementById('resultat');
txt.select();
document.execCommand('copy');
alert('Prompt copié !');
}
