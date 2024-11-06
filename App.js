let hrs = document.querySelector('#Hour')
let min = document.querySelector('#Min')
let sec = document.querySelector('#Sec')

setInterval(()=>{
let Currenttime= new Date();
hrs.innerHTML = (Currenttime.getHours()< 10? "0":"") + Currenttime.getHours();
min.innerHTML = (Currenttime.getMinutes()< 10? "0":"") + Currenttime.getMinutes();
sec.innerHTML = (Currenttime.getSeconds()< 10? "0":"") + Currenttime.getSeconds();
},1000)
