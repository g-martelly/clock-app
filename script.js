
const timer = setInterval(displayDateAndTime, 1000);
var toggle = 24;
document.getElementById('12hourFormat').hidden = true;

function displayDateAndTime() {
    //Get date
    const date = new Date();
    var daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var currentDay= daysOfTheWeek[date.getDay()];
    var month = months[date.getMonth()]; 
    var year = date.getFullYear();
    var day = date.getDay();

    //Get time
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    
    //Add leading zeros for the time
    hour24 = ("0" + hour).slice(-2);
    hour12 = hour;
    minute = ("0" + minute).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    //Grab and update the HTML elements
    var dateField = document.getElementById('date');
    var timeField24h= document.getElementById('24hourFormat');
    var timeField12h= document.getElementById('12hourFormat');

    dateField.innerHTML = currentDay + ", " + month + " " + day + ", " + year;
    timeField24h.innerHTML = hour + ":" + minute + ":" + seconds;
    timeField12h.innerHTML = Math.trunc(hour12/2) + ":" + minute + ":" + seconds + " " + am_pm();

    function am_pm () {
        if (hour > 11) {
            return "PM";
        } else {
            return "AM";
        } 
    }
}

document.getElementById("toggleButton").onclick = function() {toggleFormat()};

function toggleFormat() {
    if (toggle === 24){
        document.getElementById('24hourFormat').hidden = true;
        document.getElementById('12hourFormat').hidden = false;
        toggle = 12;
    } else {
        document.getElementById('24hourFormat').hidden = false;
        document.getElementById('12hourFormat').hidden = true; 
        toggle = 24;
    };

   
}