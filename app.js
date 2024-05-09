var hrs = document.getElementById("hrs")
var mint = document.getElementById("mint")
var sec = document.getElementById("sec")
var am = document.getElementById("AM")
var date = document.getElementById("date")
var month = document.getElementById("month")
var year = document.getElementById("year")

zeroSec = 0 ;
zeroMint = 0 ;
zeroHour = 0 ;


setInterval (function () {
    var currentDate = new Date();


if(currentDate.getSeconds()  <=9){
  zeroSec =  " 0" + currentDate.getSeconds();
}else{
    zeroSec = currentDate.getSeconds();
}


if(currentDate.getMinutes()  < 10){
    zeroMint =  " 0" + currentDate.getMinutes();
}else{
    zeroMint = currentDate.getMinutes();
}

if(currentDate.getHours()  < 10){
    zeroHour =  " 0" + currentDate.getHours();
}else{
    zeroHour = currentDate.getHours();
}

if (currentDate.getHours() > 12){
    am.innerText = "PM"
    zeroHour = currentDate.getHours() - 12
}else{
    am.innerText  = "AM"
}

if (currentDate.getHours() > 12){
    am.innerText = "PM"
    zeroHour = currentDate.getHours() - 12
}else{
    am.innerText  = "AM"    
}   

    hrs.innerText=  zeroHour
    mint.innerText = zeroMint
    sec.innerText= zeroSec

    date.innerText = currentDate.getDate() 

    var months = ["Jan","Feb","March","April","May","June","July","August", "September", "October", "November", "December"]
    month.innerText = months[currentDate.getMonth()]
    year.innerText = currentDate.getFullYear()
    
} ,1000 );
