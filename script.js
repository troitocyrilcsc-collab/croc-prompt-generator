function generer() {
  const role = document.getElementById('role').value;
  const objectif = document.getElementById('objectif').value;
  const contexte = document.getElementById('contexte').value;
  const contraintes = document.getElementById('contraintes').value;
  const ton = document.getElementById('ton').value;

  let prompt = `Tu es ${role}.`;

  if (objectif) prompt += ` Ta mission est de ${objectif}.`;
  if (contexte) prompt += ` Le contexte est le suivant : ${contexte}.`;
  if (contraintes) prompt += ` Tu dois respecter : ${contraintes}.`;
  if (ton) prompt += ` Adopte un ton ${ton}.`;

  prompt += " Fournis une réponse claire, structurée et directement exploitable.";

  document.getElementById('resultat').value = prompt;
}
