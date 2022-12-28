function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Поляков.К.А_Мищенко.В.Ю';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет бизнеса, ФБИ-03, 3 курс, 2022';

    document.getElementById('your-name').innerHTML = 'Ваше имя';
    document.getElementById('input-name').placeholder = 'введите имя';

    document.getElementById('your-surname').innerHTML = 'Ваша фамилия';
    document.getElementById('input-surname').placeholder = 'введите фамилию';

    document.getElementById('your-age').innerHTML = 'Ваш возраст';
    document.getElementById('input-age').placeholder = 'введите возраст';

    document.getElementById('ok-button').value = 'ок';

    document.getElementById('reset-button').value = 'сброс';
}

function setEnglish() {
    let name = document.getElementById('student');
    name.innerHTML = 'Polyakov.K.A_Mishenko.V.U';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-03, 3rd year, 2022';

    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').placeholder = 'enter your name';

    document.getElementById('your-surname').innerHTML = 'Your surname';
    document.getElementById('input-surname').placeholder = 'enter your surname';

    document.getElementById('your-age').innerHTML = 'Your age';
    document.getElementById('input-age').placeholder = 'enter your age';

    document.getElementById('reset-button').value = 'reset';
}

function showAlert() {
    let userName = document.getElementById('input-name').value
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    alert('Привет , ' + userName + ' ' + userSurname + '\n' + 'Ваш возраст: ' + userAge);
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}

function showAlert2() {
    alert('Это шапка');
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('wapka').style.backgroundColor = color;
}

function showAlert3() {
    alert('Это подвал, не лезь');
    document.getElementById('footer').style.backgroundColor = "red";
    document.getElementById('footer').style.color = "blue";
}

function showAlert4() {
    alert('Молодец, так и надо!!!');
}

function Uhadi() {
    let button = document.getElementById('net-button');
    button.style.backgroundColor = "red";
    button.style.position = "absolute";
    button.style.left = Math.random() * 1200 + "px";
    button.style.top = Math.random() * 1200 + "px";
}

function Uhadi2() {
    document.getElementById('net-button').style.backgroundColor = "lightgray";
}