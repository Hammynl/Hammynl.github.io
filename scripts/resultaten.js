/*

Auteur: Lars van Teeffelen
Aanmaakdatum: 12/02/2020
Laatst bewerkt: 1/12/2021

Omschrijving: Javascript bestand voor het berekenen van de gemiddelden van cijfers en tonen van resultaten.
*/

// Array voor alle modules
var modules = ["Plannen en Ontwerpen", "Realiseren", "Testen en Verbeteren", "Computervaardigheden", "Burgerschap", "Nederlands", "Engels", "Rekenen", "Beroepshouding"];

// Arrays voor alle cijfers
var po = [7.1, 7.1, 6.0];
var rea = [7.9, 6.0, 7.5];
var tv = [7.3, 5.6];
var com = [9.2, 8.0, 8.8];
var bur = [7.5];
var ned = [7.7, 7.0];
var eng = [10.0, 9.0];
var rek = [9.3, 9.3];


/* 
    Functie om gemiddelde van een array te berekenen, En een waarde terug te krijgen of het voldoende is of niet met het gemiddelde. 
*/
function getAverage(array) {
    
    var total = 0;
    for(i = 0; i < array.length; i++) 
    {
        total += array[i];
    }
    var average = total / array.length;
    
    var fixedAverage = average.toFixed(1);
    // Kijken of de gemiddelde hoger of lager is als 6, En daarop een waarde terugsturen.
    if(average >= 6.0) 
    {
        return  "Voldoende (" + fixedAverage + ")";
    } 
    else if(average <= 6.0) 
    {
        return "Onvoldoende (" + fixedAverage + ")";
    } 
    else
    {
        return "NVT";
    }
}

/*
    Omdat het niet mogelijk is 9 arrays met verschillende namen in 1 for loop te zetten, Haal ik het gemiddelde van alle arrays op en zet ik ze in 1 grote array.
    En zet ik ze op volgorde.
*/
var averages = [getAverage(po), getAverage(rea), getAverage(tv), getAverage(com), getAverage(bur), getAverage(ned), getAverage(eng), getAverage(rek), "Voldoende"];

/*
    Functie die de for loop uitvoert. Bedoeld voor button in html
*/
function fillTable() {
    /*
        Deze for loop runt net zo vaak als hoeveel items er in de Modules array zitten. En daarom ook net zo vaak als het aantal items in de averages array
    */
    for(i = 0; i < modules.length; i++) 
    {
        /*
            Hier maak ik een rij in een html tabel met de waardes van de modules array en de averages array.
        */
        document.getElementById("body").innerHTML += "<tr> <td>" + modules[i] + "</td> <td>" + averages[i] + "</td> </tr>";
    }
}

function hideButton() {
    document.getElementById("buttoncell").style.display = "none";
}



