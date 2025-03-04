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





function ufo() {
    document.getElementById("result").innerHTML = "nous avons deja recu la visite des extraterrestres, les phenomenes OVNI peuvent rejoindre cette theorie, il est possible que des civilisations exterieures envoient des objets dans lespace pour caertographier lunivers";

}


function satellite() {
    document.getElementById("result").innerHTML = "nous ne sommes pas en capacite de rentrer en contact avec les extraterrestres car nos technologies sont inadequates pour communiquer avec eux, soit nous utilisons des techniques obsoletes soit nos lointains ne sont pas en possibilite de receptionner ces messages car nayant pas encore acces a une technologie poussée";

}


function spyware() {
    document.getElementById("result").innerHTML = "Nous avons tendence a faire de lantropomorphisme en pensant que des etres venant dailleurs auront des caracteristiques communes avec les humains, il est peut possible que ces etres vivants puissent etre plus proche des meduses que des bipedes, il est peut etre possible que ces choses ne soient pas constitués de matieres organiques et puissent davantage plus proche dun robot.";

}
function distance() {
    document.getElementById("result").innerHTML = "Les distances dans lespace sont justes impossible à representer pour le cerveau humain, elles sont inouies. Si nous navons pas reussi a rencontrer des civilisations extraterrestres cest parce que les distances sont gigantesques a titre dexemple nos signals radio couvrent aux alentours 40000 annees lumieres alors que notre galaxie entiere fait une largeur denviron 100 000 ANNEES LUMIERES";

}



function  predator() {   
    document.getElementById("result").innerHTML = "Les extraterrestres existent et nous surveillent de tres tres loin, cela ne veut pas dire qu ils sont cachés parmis nous, ils sont a lexterieur, on parle parfois aussi de zoo humain";
}


function technology() {
    document.getElementById("result").innerHTML = "tant que nous naurons pas passer un certain cap technologique nous ne pourrons pas rentrer en contact avec des ET. Il est possible que notre degré de technicité soit un frein pour la decouverte de la vie ailleurs, on ignore peut etre nos messages envoyés dans lespace a cause de notre aspect primitif";

}



function openModal2(){
    document.getElementById("result").innerHTML = " L'équation de Drake dit que le nombre N probable de civilisations dans notre galaxie est égale au produit de sept paramètres";

}

function openModal3(){
    document.getElementById("result").innerHTML = "nombre d étoiles qui se forment annuellement dans notre galaxie";
   
}

function openModal4(){
    document.getElementById("result").innerHTML = "fp est la part des étoiles dotées de planètes";
   
}

function openModal5(){
    document.getElementById("result").innerHTML = "ne est l espérance du nombre de planètes potentiellement propices à la vie par étoile";
 
}

function openModal6(){
    document.getElementById("result").innerHTML = "fl est la part de ces planètes où la vie apparaît effectivement";

}

function openModal7(){
    document.getElementById("result").innerHTML = "part de ces planètes où apparaît la vie intelligente";

}

function openModal8(){
    document.getElementById("result").innerHTML = "fc est la part de ces planètes capables et désireuses de communiquer";

}

function openModal9(){
    document.getElementById("result").innerHTML = "durée de vie moyenne d une civilisation, en années";

}

