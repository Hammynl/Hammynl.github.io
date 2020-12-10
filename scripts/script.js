/*
Auteur: Lars van Teeffelen
Aanmaakdatum: 11-25-2020

Omschrijving: JavaScript bestand test
*/

var hamburgerButton = document.querySelector("#burgerLogo");
var hamburgerMenu = document.querySelector("#burgerMenu");

hamburgerButton.addEventListener("click", () => {
    if(document.getElementById("burgerMenu").style.display == "block") 
    {
        document.getElementById("burgerMenu").style.display = "none";
    } 
    else 
    {
        document.getElementById("burgerMenu").style.display = "block";
    }
});





