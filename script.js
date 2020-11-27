var dateField = document.getElementById('date');
var timeField = document.getElementById('time');
var date = new Date();
var daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var currentDay= daysOfTheWeek[date.getDay()];
var month = months[date.getMonth()]; 
var year = date.getFullYear();
var day = date.getDay();

var hour = date.getHours();
var minute = date.getMinutes();
var seconds = date.getSeconds();


console.log(dateField);
dateField.innerText = currentDay + ", " + month + " " + day + ", " + year;
timeField.innerText = hour + ":" + minute + ":" + seconds;