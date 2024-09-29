var dateOfBirth = document.querySelector('#DOB');


var calbtn = document.querySelector('#Calculate');

var year = document.getElementById('Years');

var month = document.getElementById('Months');

var day = document.getElementById('Day');

 calbtn.addEventListener("click", function () {
    var birthDate = new Date(dateOfBirth.value);
    var currentDate = new Date();

    var years = currentDate.getFullYear() - birthDate.getFullYear();
    var months = currentDate.getMonth() - birthDate.getMonth();
    var days = currentDate.getDay() - birthDate.getDay();





if ( days < 0) {
    months--;
    days += 30;
}
if (months < 0) {
    years--;
    month += 12;
}

year.textContent = years;
month.textContent = months;
day.textContent = days;


})
 
