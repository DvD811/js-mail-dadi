// Chiedi all’ utente la sua email, controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

var mailUser = prompt("Inserisci il tuo indirizzo mail per verificare l' accesso");
var dbUserMail = ["adda@tin.it", "erre@gan.org", "ciao@boh.org", "nano@zio.ch", "piddio@god.va", "cin@cin.et", "aieie@brazoff.eh", "basta@adess.o"];

if (dbUserMail.includes(mailUser)) {
    document.getElementById("reply").innerHTML = "Benvenuto," + mailUser + "puoi accedere alla tua area riservata.";
} else {
    document.getElementById("reply").innerHTML = "Mi dispiace, il tuo indirizzo mail non è presente nel nostro database.";
};