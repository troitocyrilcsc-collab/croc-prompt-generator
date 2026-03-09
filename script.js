
function genererPrompt(){

let cadrage = document.getElementById("cadrage").value
let role = document.getElementById("role").value
let objectif = document.getElementById("objectif").value
let cible = document.getElementById("cible").value

let prompt = `Cadrage : ${cadrage}

Rôle : ${role}

Objectif : ${objectif}

Cible : ${cible}

Réponds en suivant ces instructions.`

document.getElementById("resultat").textContent = prompt

}

function copierPrompt(){

let texte = document.getElementById("resultat").textContent

navigator.clipboard.writeText(texte)

alert("Prompt copié !")

}
