function generer() {
  const data = {
    role: document.getElementById('role').value,
    objectif: document.getElementById('objectif').value,
    contexte: document.getElementById('contexte').value,
    contraintes: document.getElementById('contraintes').value,
    ton: document.getElementById('ton').value
  };

  let prompt = `Tu es ${data.role}.`;

  if (data.objectif) {
    prompt += ` Ta mission est de ${data.objectif}.`;
  }

  if (data.contexte) {
    prompt += ` Le contexte est le suivant : ${data.contexte}.`;
  }

  if (data.contraintes) {
    prompt += ` Tu dois respecter les contraintes suivantes : ${data.contraintes}.`;
  }

  if (data.ton) {
    prompt += ` Adopte un ton ${data.ton}.`;
  }

  prompt += ` Fournis une réponse claire, structurée et directement exploitable.`;

  document.getElementById('resultat').value = prompt;
}
