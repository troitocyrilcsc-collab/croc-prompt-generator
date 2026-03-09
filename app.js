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

/**
 * ADVANCED CROC PROMPT GENERATION SYSTEM
 * Generates complete and structured prompts based on CROC framework selections
 */

function generatePrompt(){

const context=document.getElementById("context").value;
const role=document.getElementById("role").value;
const target=document.getElementById("target").value;
const goal=document.getElementById("goal").value;
const constraints=document.getElementById("constraints").value;

// Validation
if(!context || !role || !target || !goal) {
alert("⚠️ Veuillez remplir tous les champs requis (Contexte, Rôle, Public, Objectif)");
return;
}

// Build the advanced structured prompt
const prompt = buildStructuredPrompt(context, role, target, goal, constraints);

// Display the prompt
document.getElementById("output").textContent = prompt;

}

/**
 * Build a complete and structured prompt based on CROC elements
 * @param {string} context - The context/environment
 * @param {string} role - The role of the AI
 * @param {string} target - The target audience
 * @param {string} goal - The main objective
 * @param {string} constraints - Pedagogical constraints
 * @returns {string} Complete structured prompt
 */
function buildStructuredPrompt(context, role, target, goal, constraints) {

const promptTemplate = `
╔═══════════════════════════════════════════════════════════════════════════╗
║                    📋 PROMPT CROC STRUCTURÉ - COMPLET                     ║
╚═══════════════════════════════════════════════════════════════════════════╝

🎯 CADRE DE TRAVAIL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Contexte : ${context}
Date de génération : ${new Date().toLocaleDateString('fr-FR')}


👤 IDENTITÉ DE L'IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tu es : ${role}

En tant que ${role}, tu dois :
- Adopter une expertise reconnue dans ton domaine
- Communiquer de manière claire et professionnelle
- Adapter ton langage et ton ton au contexte


👥 PUBLIC CIBLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Public visé : ${target}

Pour ce public, tu dois :
- Adapter la complexité du contenu
- Utiliser un langage approprié au niveau de compréhension
- Fournir des exemples pertinents et accessibles


🎓 OBJECTIF PRINCIPAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Objectif : ${goal}

Ta mission précise :
${goal}

Résultat attendu :
- Réponse complète et structurée
- Contenu pédagogiquement valide
- Format clair et facilement exploitable


📏 CONTRAINTES PÉDAGOGIQUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${constraints ? `Spécifications : ${constraints}` : 'Aucune contrainte spécifique. Applique les bonnes pratiques pédagogiques.'}


📊 STRUCTURE ATTENDUE DE LA RÉPONSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ 1. INTRODUCTION
   - Contextualise le sujet
   - Établis la pertinence de la réponse
   
✅ 2. DÉVELOPPEMENT STRUCTURÉ
   - Présente les points clés de manière logique
   - Utilise des sous-sections si nécessaire
   - Inclus des exemples concrets
   
✅ 3. POINTS PÉDAGOGIQUES
   - Étapes d'apprentissage progressives
   - Concepts clés à retenir
   - Cas d'usage pratiques
   
✅ 4. CONCLUSION
   - Résume les éléments essentiels
   - Ouvre sur des perspectives futures
   - Propose des pistes de approfondissement


⚙️ DIRECTIVES D'EXÉCUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. ✓ Comprendre complètement le contexte : "${context}"
2. ✓ Adopter le rôle de : "${role}"
3. ✓ Adapter la réponse pour : "${target}"
4. ✓ Atteindre l'objectif : ${goal}
5. ✓ Respecter les contraintes : ${constraints || 'Standards pédagogiques'}
6. ✓ Fournir une réponse immédiatement utilisable
7. ✓ Vérifier la qualité et la complétude de la réponse


═══════════════════════════════════════════════════════════════════════════════

📝 COMMENCE MAINTENANT À RÉPONDRE À CET OBJECTIF :

${goal}

═══════════════════════════════════════════════════════════════════════════════
`;

return promptTemplate;
}

function copyPrompt(){

const text=document.getElementById("output").textContent;

navigator.clipboard.writeText(text);

alert("✅ Prompt copié dans le presse-papiers!");

}

function downloadPrompt(){

const text=document.getElementById("output").textContent;

const blob=new Blob([text],{type:"text/plain;charset=utf-8"});

const a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download=`prompt-croc-${new Date().getTime()}.txt`;

a.click();

}

function savePrompt(){

const text=document.getElementById("output").textContent;

if(!text) {
alert("⚠️ Aucun prompt à sauvegarder");
return;
}

let saved=JSON.parse(localStorage.getItem("croc_prompts")||"[]");

const promptEntry = {
id: Date.now(),
content: text,
date: new Date().toLocaleString('fr-FR'),
context: document.getElementById("context").value,
role: document.getElementById("role").value,
target: document.getElementById("target").value,
goal: document.getElementById("goal").value
};

saved.push(promptEntry);

localStorage.setItem("croc_prompts",JSON.stringify(saved));

loadPrompts();

alert("✅ Prompt sauvegardé avec succès!");

}

function loadPrompts(){

const container=document.getElementById("savedPrompts");

container.innerHTML="";

let saved=JSON.parse(localStorage.getItem("croc_prompts")||"[]");

if(saved.length === 0) {
container.innerHTML = "<p style='text-align:center; color:#999;'>📭 Aucun prompt sauvegardé pour le moment</p>";
return;
}

saved.reverse().forEach(promptEntry=>{

const div=document.createElement("div");
div.className="saved-item";

const header = document.createElement("div");
header.className="saved-item-header";
header.innerHTML = `
<div class="saved-item-meta">
<strong>${promptEntry.context} • ${promptEntry.role}</strong>
<small>${promptEntry.date}</small>
</div>
<button onclick="deleteSavedPrompt(${promptEntry.id})" class="delete-btn">🗑️ Supprimer</button>
`;

const content = document.createElement("pre");
content.className="saved-item-content";
content.textContent = promptEntry.content;

div.appendChild(header);
div.appendChild(content);

container.appendChild(div);

});

}

function deleteSavedPrompt(id) {
if(confirm("Êtes-vous sûr de vouloir supprimer ce prompt?")) {
let saved=JSON.parse(localStorage.getItem("croc_prompts")||"[]");
saved = saved.filter(p => p.id !== id);
localStorage.setItem("croc_prompts",JSON.stringify(saved));
loadPrompts();
alert("✅ Prompt supprimé!");
}
}

loadPrompts();