function cToF(){

    
    c = document.getElementById("value").value*1;

    let f = (((c * (9/5))) + 32).toFixed(2);

    document.getElementById("converted").value = f +' F'+'°'; 

 }

function fToC(){


    f = document.getElementById("value").value*1;

    let c = ((f - 32) * (5 / 9)).toFixed(2);

    document.getElementById("converted").value = c +' C'+'°'; 

 }

function mToF(){

    m = document.getElementById("value").value*1;

    let ft = (m * 3.28084).toFixed(2);

    document.getElementById("converted").value = ft + ' m';
}

function fToM(){

    f = document.getElementById("value").value*1;

    let m = (f * 0.3048).toFixed(2);

    document.getElementById("converted").value = m + ' ft';
}
