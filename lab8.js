function snowDate(params) {
    let out = document.getElementById('today');
    let today = new Date();
    out.innerHTML = today.toLocaleDateString();
}

function showDaysCount(params) {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    let result = document.getElementById('result');
    daysCount = Math.ceil(daysCount);
    result.innerHTML = 'С даты рождения прошло дней: ' + daysCount;
}

window.addEventListener('load', snowDate);

function showTime() {
    let outTime = document.getElementById('time');
    let currentTime = new Date();
    outTime.innerHTML = currentTime.toLocaleTimeString('ru');
}

window.addEventListener('load', showTime);
setInterval(showTime, 1000);

function showNewDate(params) {
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    
    
    let days = document.querySelector('input[type=number]').value;

    let NewDate = birthday.getTime() + days*24*60*60*1000;
    NewDate = new Date(NewDate);
   
    days_result.innerHTML = 'Круглая дата:  ' + NewDate;
}