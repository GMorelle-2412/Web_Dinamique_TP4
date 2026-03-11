/*Question 10:
1) Reproduire le code de l'exemple précédent (V)
2) Au clic de souris, changer la class css de la div (attribute 
className) (v)
3) Au survole de souris (trouver l'évènement dans la doc MDN), 
changer la visibilité de la div (trouver l'attribut avec le debugger)
*/

var compteur = 0;
var compteur2 = 0;
var conteurchange = 0;
var conteurchange_2 = 0;

var Madiv1 = document.getElementById("Methode2");
Madiv1.addEventListener("click", UneProcedureQuiChangeLetext);

var Madiv2 = document.getElementById("Methode3");
Madiv2.addEventListener("mouseover", UneProcedureQuiSurvole);

var Madiv3 = document.getElementById("Methode4");
Madiv3.addEventListener("keydown", UneProcedureQuiEcrit);

function UneProcedureQuiChangeLetext(evenement) {

    compteur++;
    evenement.target.innerHTML = "on m'a cliqué dessus : " + compteur + " fois";

    if (conteurchange == 0) {
        evenement.target.className = "dive1";
        conteurchange = 1;
    } else {
        evenement.target.className = "dive0";
        conteurchange = 0;
    }

}

function UneProcedureQuiSurvole(evenement) {
    compteur2++;
    evenement.target.innerHTML = "on m'a survollé : " + compteur2 + " fois";
    

    if (conteurchange_2 == 0) {
        evenement.target.className = "dive_inv";
        evenement.target.innerHTML = "";
        conteurchange_2 = 1;
    } else {
        evenement.target.className = "dive0";
        conteurchange_2 = 0;
    }
}

function UneProcedureQuiEcrit(evenement) {
    evenement.target.innerHTML = "on a appuyé sur : " + evenement.key;
}