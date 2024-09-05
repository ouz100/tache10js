// Fonction pour demander à l'utilisateur de remplir un tableau de taille 5
function remplirTableau() {
    let tableau = [];
    for (let i = 0; i < 5; i++) {
        let element = prompt(`Entrez l'élément ${i + 1} du tableau:`);
        tableau.push(Number(element));
    }
    return tableau;
}

// Remplir les deux tableaux
let tab1 = remplirTableau();
let tab2 = remplirTableau();

console.log('tab1:', tab1);
console.log('tab2:', tab2);

 // 2. Créer tab3 qui contient les éléments de tab1 qui ne sont pas dans tab2
let tab3 = tab1.filter(element => !tab2.includes(element));
console.log('tab3 (éléments de tab1 qui ne sont pas dans tab2):', tab3);

