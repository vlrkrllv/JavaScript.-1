//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;
var screen = "screen1";

var answers = [];

function log(questionText, answerText) {
    answers.push({questionText, answerText});
}
do {
    do {
        ok = false;
        event = parseInt(prompt(works[screen].question + works[screen].answer1.text + works[screen].answer2.text + '-1 - Выход из игры'));
       
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(event);
        }
    } while (!ok);
    log(works[screen].question, works[screen]["answer" + event].text);
    var nextScreen = works[screen]["answer" + event].screen;
    screen = "screen" + nextScreen;
} while (nextScreen !== -1)
alert('Спасибо за игру');

var number = parseInt(prompt("Введите номер вопроса от 1 до 3, чтобы посмотреть ответ."))
if (number > 0 && number < 4) {
    alert(answers[number - 1].questionText + '\n' + answers[number - 1].answerText)
} else {
    alert("Введите корректный номер вопроса - от 1 до 3.")
}
//------------------------------------------
function isAnswer(event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > 2) {
        alert('Ваше число выходит из допустимого диапазона');
        return false;
    }
	return true;
    
}

