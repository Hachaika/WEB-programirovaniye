function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    let userSex = document.getElementById('sex').value;

    let greeting;
    if(userAge <=17) {
        greeting = 'Здравствуй, ';
        if(userSex == 'female') {
            greeting += 'девочка ';
        }
        else {
            greeting += 'мальчик ';
        }
    }
    else {
        greeting = 'Здравствуйте, ';
        if(userSex == 'female') {
            greeting += 'госпожа ';
        } 
        else {
            greeting += 'господин ';
        }
     }
    alert(greeting + userName + '' + userSurname + '\n'
        + 'Ваш возраст: ' + userAge);

    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}
function makeStairs() {
    let stairs = document.querySelector('#stairs');
    let stepCount = 20;
    for(let i = 0; i<stepCount; i++) {
        stairs.innerHTML += '<div class="step"></div>';
    }

    let steps = document.querySelectorAll('.step');
    for(let i = 0; i<steps.length; i++) {
        steps[i].style.left = (30 + 10*i) + 'px';
        steps[i].style.top = (300 + 80*i) + 'px';
        steps[i].innerHTML = 'Блок номер' + Number(i + 1);
    }
}
function makeSnow() {
    let snegopad = document.querySelector('#snegopad');
    let stepCount = 50;
    for (let i = 0; i<stepCount; i++) {
        snegopad.innerHTML += '<img class="sneg" src="https://pngimg.com/uploads/snowflakes/snowflakes_PNG7545.png">';
    }
    let sneg = document.querySelectorAll('.sneg');
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;

    for (let i = 0; i<sneg.length; i++) {
        sneg[i].style.left = Math.random() * (screenWidth-50) + 'px';
        sneg[i].style.top = Math.random() * (screenHeight-50) + 'px';
        sneg[i].style.width = Math.random() * 100 + 'px';
    }
}


function colorRandom() {
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('colo').style.backgroundColor = color;
}

function Table() {
    let tAdd = document.getElementById('tableU');
    let table = '<table border=1><tr>';
    let x = 31; {
      for (let y = 1; y < 11; y++) {
        let el = '<td>' + x + 'x' + y + ' = ' + x * y + '</td>';
        table += el;
      }
      table += '</tr><tr>';
    }
    table += '</tr></table>';
    tAdd.innerHTML = table;
  } 
  
  function Table2() {
    let tAdd = document.getElementById('tableU2');
    let table = '<table border=1><tr>';
    let x = 29; {
      for (let y = 1; y < 11; y++) {
        let el = '<td>' + x + 'x' + y + ' = ' + x * y + '</td>';
        table += el;
      }
      table += '</tr><tr>';
    }
    table += '</tr></table>';
    tAdd.innerHTML = table;
  }  