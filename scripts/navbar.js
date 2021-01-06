/*
Auteur: Lars van Teeffelen
Aanmaakdatum: 11-25-2020

Omschrijving: JavaScript bestand test
*/

function openBurgerMenu() {
    if(document.getElementById("regularMenu").style.display == "none" || document.getElementById("regularMenu").style.display == "") 
    {
        document.getElementById("regularMenu").style.display = "block";

        document.getElementById("line1").style.cssText = "opacity: 1; transform: translateY(12px) rotateZ(45deg); transition: 0.5s;";
        document.getElementById("line2").style.cssText = "opacity: 0; transition: 0.5s;"
        document.getElementById("line3").style.cssText = "opacity: 1; transform: translateY(-8px) rotate(-45deg); transition: 0.5s;";
    } 
    else 
    {
        document.getElementById("regularMenu").style.display = "none";
        
        document.getElementById("line1").style.cssText = "opacity: 1; transform: translateY(0px); transition: 0.5s;";
        document.getElementById("line2").style.cssText = "opacity: 1; transition: 0.5s;"
        document.getElementById("line3").style.cssText = "opacity: 1; transform: translateY(0px); transition: 0.5s;";
    }
}



