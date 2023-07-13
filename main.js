const clock = setInterval(Orologio,1000);
    
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function Orologio() {
    const d = new Date();
    const ora = addZero(d.getHours());
    const min = addZero(d.getMinutes());
    const sec = addZero(d.getSeconds());
    document.getElementById("orologio").innerHTML= ora+ ":" + min+ ":" + sec;
}


//scelgo la data del countdown
const countDownDate = new Date("July 14, 2023 09:30").getTime();

// aggiorno ogni secondo
const x = setInterval(function() {

//prendo il tempo attuale
const now = new Date().getTime();

// variabile countdown e ora
const distance = countDownDate - now;

// tempo calcolato per giorno, ora, minuti e secondi
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// inserisco in html
document.getElementById("countdown").innerHTML = days + "giorni " + hours + "ore " + minutes + "minuti " + seconds + "secondi ";

//se il countdown finisce allora scrivo un messaggio
if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "TEMPO SCADUTO!";
}
}, 1000);