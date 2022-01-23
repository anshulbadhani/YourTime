let time; let date; let a;

setInterval(() => {

    a = new Date();
    date = a.toLocaleDateString();
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById('actualtime').innerText = time + " on " + a.toDateString();
    
}, 1000);

console.log(time);