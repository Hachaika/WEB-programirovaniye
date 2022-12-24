const quizData = [
    {
        question: "Единицей измерения информации является:",
	answers: ['бот','бит','герц'],
        correct: 'бит'
    },
    {
        question: "Какая система счисления используется при представлении числа в памяти компьютера: Подробнее:",
	answers: ['Двоичная','Десятичная','Троичная'],
        correct: 'Двоичная'
    },
    {
        question: "Обработку данных производит:",
	answers: ['Клавиатура','Видеокарта','Процессор'],
        correct: 'Процессор'
    },
    {
        question: "В состав персонального компьютера входит:",
	answers: ['Сканер, принтер, монитор','Монитор, системный блок, клавиатура, мышь','Винчестер, мышь, монитор, клавиатура'],
        correct: 'Монитор, системный блок, клавиатура, мышь'
    },
    {
        question: "Все файлы компьютера записываются на?",
	answers: ['Винчестер','Флоппи-диск','Модулятор'],
        correct: 'Винчестер'
    },
    {
        question: "Как включить на клавиатуре все заглавные буквы?",
	answers: ['Caps Lock','Alt + Ctrl','Shift + Ctrl'],
        correct: 'Caps Lock'
    },
    {
        question: "Как называется основное окно Windows, которое появляется на экране после полной загрузки операционной среды?",
	answers: ['Рабочий стол','Окно загрузки','Пуск → Калькулятор'],
        correct: 'Рабочий стол'
    },
    {
        question: "Какую последовательность действий надо выполнить для запуска калькулятора в Windows?",
	answers: ['Пуск → Программы → Стандартные → Калькулятор','Стандартные → Калькулятор','C++'],
        correct: 'Пуск → Программы → Стандартные → Калькулятор'
    },
    {
        question: "Как называется программа файловый менеджер, входящая в состав операционной среды Windows?",
	answers: ['Проводник','Сопровождающий','Менеджер файлов'],
        correct: 'Проводник'
    },
    {
        question: "Для удаления файла в программе Windows commander следует нажать на клавиатуре кнопку?",
	answers: ['F5','F7','F8'],
        correct: 'F8'
    },
    {
        question: "Для запуска любой программы надо на рабочем столе Windows нажать на?",
	answers: ['Ярлык программы','Ссылку на программу','Рабочий стол'],
        correct: 'Ярлык программы'
    },
    {
        question: "Чем отличается значок папки от ярлыка?",
	answers: ['Признак ярлыка – маленькая стрелка в левом нижнем углу значка','Значок ярлыка крупнее всех остальных значков','Признак ярлыка – узелок в левом нижнем углу значка, которым он привязывается к объекту'],
        correct: 'Признак ярлыка – маленькая стрелка в левом нижнем углу значка'
    },
    {
        question: "Для того, чтобы найти файл в компьютере надо нажать?",
	answers: ['Пуск → Найти → Файлы и папки','Найти → Файл','Пуск → Файл → Найти'],
        correct: 'Пуск → Найти → Файлы и папки'
    },
    {
        question: "Для настройки параметров работы мыши надо нажать?",
	answers: ['Пуск → настройка → панель управления → мышь','Пуск → панель управления → мышь','Настройка → панель управления → мышь'],
        correct: 'Пуск → настройка → панель управления → мышь'
    },
    {
        question: "Как установить время, через которое будет появляться заставка на рабочем столе Windows?",
	answers: ['Свойства: экран → Заставка → Интервал','Свойства: Интервал','Заставка → Период времени'],
        correct: 'Свойства: экран → Заставка → Интервал'
    },
    {
        question: "С какой целью производится выделение объектов?",
	answers: ['С тем, чтобы произвести с ними какие-либо действия (открыть, скопировать, переместить и др.)','С целью группировки и создания тематической группы','С целью их сортировки'],
        correct: 'С тем, чтобы произвести с ними какие-либо действия (открыть, скопировать, переместить и др.)'
    },
    {
        question: "Как вызвать на экран контекстное меню?",
	answers: ['Щелкнуть на объекте правой кнопкой мыши','Дважды щелкнуть левой кнопкой мыши на объекте','Открыть команду меню СЕРВИС и в ней выбрать команду Контекстное меню'],
        correct: 'Щелкнуть на объекте правой кнопкой мыши'
    },
    {
        question: "В какой программе можно создать текстовый документ (отчет по научной работе)?",
	answers: ['Word','Power Point','Excel'],
        correct: 'Word'
    },
    {
        question: "Сколько документов можно одновременно открыть в редакторе Word?",
	answers: ['Только один','Сколько необходимо','Зависит от задач пользователя и ресурсов компьютера'],
        correct: 'Зависит от задач пользователя и ресурсов компьютера'
    },
    {
        question: "Открыть или создать новый документ в редакторе Microsoft Word можно используя панель?",
	answers: ['Стандартная','Структура','Форматирование'],
        correct: 'Стандартная'
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');
const gif = document.getElementById('vistrel');
const phonk = document.getElementById('phonk');
const img = document.getElementById('skip');
const slovki = document.getElementById('slova');
const imya = document.getElementById('name');
gif.style.visibility = "hidden";

let score = 0;
let a = [0, 1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
let b = [0, 1, 2];
shuffle(a);
shuffle(b);
let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    
    const currentQuizData = quizData[a[currentQuiz]];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.answers[b[0]];
    b_text.innerText = currentQuizData.answers[b[1]];
    c_text.innerText = currentQuizData.answers[b[2]];
}

function shuffle(array) {                           //перемешивание массива
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function reset_animation() {
    quiz.style.animation = 'none';
    quiz.offsetHeight; /* trigger reflow */
    quiz.style.animation = null; 
  }

submit.addEventListener('click', () => {
    const answer = getSelected();
    

        if(answer)
        {
        if(parseInt(answer) === 0)
            {
            if(a_text.innerText === quizData[a[currentQuiz]].correct)
            {
                        score++;	
                }	
            }
        else if(parseInt(answer) === 1)
            {
            if(b_text.innerText === quizData[a[currentQuiz]].correct)
            {
                        score++;	
                }	
            }
        else if(parseInt(answer) === 2)
            {
            if(c_text.innerText === quizData[a[currentQuiz]].correct)
            {
                        score++;	
                }	
            }
            

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
            quiz.style.animation="ani2 1.5s forwards";
            reset_animation();
            imya.style.visibility="hidden";
            
        }
        else{
            let name_ = document.getElementById('name').value;
            quiz.innerHTML = `<h2>${name_}, Вы ответили верно на ${score}/${quizData.length} вопросов</h2>
            <button onclick="location.reload()">Заново</button>
            `;
            if(score < 10){
                const imgSrc = 'https://ic.pics.livejournal.com/tanjand/44781189/100794805/100794805_original.jpg?from=https://ic.pics.livejournal.com/tanjand/44781189/100794805/100794805_original.jpg';
                img.setAttribute('src', imgSrc);
                gif.style.visibility = "visible";
                slovki.innerHTML = "АХАХАХАХАХАХАХАХХА";
                slovki.style.top = "38%";
                slovki.style.left = "10%";
            }
            else{
                img.style.visibility = "hidden";
                phonk.style.backgroundImage = "url('https://thumbs.gfycat.com/PerkyGoodnaturedHagfish-size_restricted.gif')";
                slovki.innerHTML = "На этот раз тебе повезло";
                slovki.style.top = "35%";
                slovki.style.left = "12%";
            }
        }
    }
});