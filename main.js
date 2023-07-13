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

