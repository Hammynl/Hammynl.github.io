/*

Auteur: Lars van Teeffelen
Aanmaakdatum: 12/02/2020
Laatst bewerkt: 1/10/2021

Omschrijving: Javascript bestand voor de werking van het hamburgermenu
*/

// Functie om een bepaalde iframe in de opleidingen pagina te openen
function openPopup(iframeCount) 
{
    /* 
        Openen van de popup en de iframe, De parameter werkt van 1 - 4 
        omdat deze iframes id frame1, frame2, frame3 en frame4 hebben. 
    */
    document.getElementById("popup").style.display = "block";
    document.getElementById("frame" + iframeCount).style.display = "block";
}

// Functie om de popup af te sluiten.
function closePopup()
{
    // De grote popup zelf sluiten
    document.getElementById("popup").style.display = "none";
    /* 
        In deze for loop worden alle iframes van 1 tot en met 4 gesloten
    */ 
    for(i = 1; 4 >= i; i++) 
    {
        document.getElementById("frame" + i).style.display = "none";
    }
}