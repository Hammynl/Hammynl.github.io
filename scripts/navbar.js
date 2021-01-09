/*
Auteur: Lars van Teeffelen
Aanmaakdatum: 12-12-2020

Omschrijving: Hamburgermenu 
*/


// Functie voor een hamburgermenu in mobiele weergave
function openBurgerMenu() {
    // Checken of het menu op display none staat of geen waarde heeft
    if(document.getElementById("regularMenu").style.display == "none" || document.getElementById("regularMenu").style.display == "") 
    {
        document.getElementById("regularMenu").style.display = "block";
        // Animatie voor het hamburgerlogo
        document.getElementById("line1").style.cssText = "opacity: 1; transform: translateY(12px) rotateZ(45deg); transition: 0.5s;";
        document.getElementById("line2").style.cssText = "opacity: 0; transition: 0.5s;"
        document.getElementById("line3").style.cssText = "opacity: 1; transform: translateY(-8px) rotate(-45deg); transition: 0.5s;";
    } 
    // als het item display block heeft dan word het naar none gezet. Dit zorgt ervoor dat het hamburgermenu open en dicht kan
    else 
    {
        document.getElementById("regularMenu").style.display = "none";
        // Animatie voor het hamburgerlogo
        document.getElementById("line1").style.cssText = "opacity: 1; transform: translateY(0px); transition: 0.5s;";
        document.getElementById("line2").style.cssText = "opacity: 1; transition: 0.5s;"
        document.getElementById("line3").style.cssText = "opacity: 1; transform: translateY(0px); transition: 0.5s;";
    }
}




