/* Dans le fichier JS, creer la function isLeapYear(year) qui va tester si une année est bissextile

Faire un if sur year avec la condition de l'année bissextile (voir plus haut).
Le reste de la division entière se calcule avec le modulo (opérateur % en JS)
La fonction retourne true si c'est une année bissextile, false sinon
(On peut tester cette fonction directement dans la console JS du navigateur)



Dans le JS, ajouter un écouteur d'evenement (addEventListener) sur le click du <button>.
Cet evenement aura une fonction anonyme associée.


Dans la fonction anonyme de l'event, il faut :

Récuperer la value de l'input text de l'année.  Il faudra peut etre transformer cette valeur en Number

Appeller la fonction isLeapYear avec l'année récuprer juste avant en paramètre
En fonction du résultat d'avant, afficher un message dans le innerText de la balise <p> du résultat
 */

let subAnnee = document.getElementById('subannee');

function isLeapYear(year) {
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
        return true;
    }
    else {return false;}
}

let para = document.getElementById('result');
para.innerText = ' ';

subAnnee.addEventListener("click", function (event) {
    event.preventDefault();
    let annee = parseInt(document.getElementById('annee').value);
    console.log(annee);
    if (isLeapYear(annee)=== true) {
        console.log('ok');
        para.innerText = 'année bissextile';

    }
    else {
        console.log('NOK');
        para.innerText = 'année non bissextile';
    }

});