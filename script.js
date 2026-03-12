
function generate(){

let c=document.getElementById("cadrage").value
let r=document.getElementById("role").value
let o=document.getElementById("objectif").value
let ci=document.getElementById("cible").value
let d=document.getElementById("details").value

let prompt=`Tu es un ${r}.

Contexte :
${c}.

Objectif :
${o}.

Public cible :
${ci}.

Contraintes :
${d}

Donne une réponse structurée, claire et professionnelle.`

document.getElementById("result").textContent=prompt

}

function copy(){
let t=document.getElementById("result").textContent
navigator.clipboard.writeText(t)
alert("Prompt copié !")
}
