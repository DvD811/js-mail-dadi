// Gioco dei dadi, chi fa di più vince;
// il secondo riguarda proprio lo scenario base, quindi ci saranno 2 lanci di dadi e poi noi dovremmo stampare a schermo chi ha vinto, se ha vinto qualcuno.

var p1_dado1 = Math.floor(Math.random() * 6);
var p1_dado2 = Math.floor(Math.random() * 6);
var p2_dado1 = Math.floor(Math.random() * 6);
var p2_dado2 = Math.floor(Math.random() * 6);



function singRis() {
    document.getElementById("ris_p1").innerHTML = "Risultato del primo dado: " + p1_dado1 + "<br>" +
        "Risultato del secondo dado: " + p1_dado2 + "<br> Risultato finale: " + (p1_dado1 + p1_dado2);
};

function singRis2() {
    document.getElementById("ris_p2").innerHTML = "Risultato del primo dado: " + p2_dado1 + "<br>" +
        "Risultato del secondo dado: " + p2_dado2 + "<br> Risultato finale: " + (p2_dado1 + p2_dado2);
};