const vit_lumiere = 1079252849;
const al = 9460528000000;
const planetes = [
    { nom: "Mercure", distance: 91700000, gravite: 0.38 },
    { nom: "Vénus", distance: 41400000, gravite: 0.91 },
    { nom: "Mars", distance: 55700000, gravite: 0.38 },
    { nom: "Jupiter", distance: 628730000, gravite: 2.34 },
    { nom: "Saturne", distance: 1275000000, gravite: 1.06 },
    { nom: "Uranus", distance: 2723950000, gravite: 0.92 },
    { nom: "Neptune", distance: 4351400000, gravite: 1.19 },
    { nom: "Pluton", distance: 5906376272, gravite: 0.06 }
];

function calculer() {
    let poids = parseFloat(document.getElementById("poids").value);
    let vitesse = parseFloat(document.getElementById("vitesse").value);
    
    if (poids > 150 || vitesse > vit_lumiere) {
        alert("Erreur : Veuillez respecter les limites de poids et de vitesse.");
        return;
    }
    
    let resultats = "";
    planetes.forEach(planete => {
        let temps = planete.distance / vitesse; 
        let uniteTemps = " heures";
        
        if (temps > 24) { temps /= 24; uniteTemps = " jours"; }
        if (temps > 365) { temps /= 365.25; uniteTemps = " années"; }
        
        let poidsFinal = (poids * planete.gravite).toFixed(2);
        
        resultats += `<p>${planete.nom} : ${temps.toFixed(2)}${uniteTemps} | Poids sur place : ${poidsFinal} kg</p>`;
    });
    
    document.getElementById("resultats").innerHTML = resultats;
}

function calculerVoyageLointain() {
    let vitesse = parseFloat(document.getElementById("vitesse").value);
    let anneeLumiere = parseFloat(document.getElementById("anneeLumiere").value);
    
    if (vitesse > vit_lumiere || anneeLumiere <= 0) {
        alert("Erreur : Veuillez entrer une valeur valide pour la vitesse et la distance.");
        return;
    }
    
    let distanceKm = anneeLumiere * al;
    let tempsAnnees = distanceKm / (vitesse * 24 * 365.25);
    
    document.getElementById("resultatVoyage").innerHTML = `<p>Temps nécessaire pour parcourir ${anneeLumiere} années-lumière à ${vitesse} km/h : ${tempsAnnees.toFixed(2)} années</p>`;
}