/*
Auteur: Lars van Teeffelen
Aanmaakdatum: 26-11-2020

Omschrijving: Pagina van bedrijf
*/

// Prompt om de naam van de gebruiker op te vragen
var name = prompt("Wat is uw naam?");
document.getElementById("name").innerHTML = name;

// Items voor het hoofdmenu in een Array
var menuItems = ["Home", "Producten", "Over ons", "Contact", "Retour"];

// Items vanuit de array in de HTML toevoegen.
document.getElementById("item1").innerHTML = menuItems[0];
document.getElementById("item2").innerHTML = menuItems[1];
document.getElementById("item3").innerHTML = menuItems[2];
document.getElementById("item4").innerHTML = menuItems[3];
document.getElementById("item5").innerHTML = menuItems[4];




