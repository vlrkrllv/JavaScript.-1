// 2. Не выполняя кода, ответить, что выведет браузер и почему:

if (!("a" in window)) {
    var a = 1;
}
alert(a); // объявление переменной a будет поднято наверх, таким образом условие для if не выполнится и alert выведет Undefined


var b = function a(x) {
    x && a(--x);
};
alert(a); // будет выведена ошибка, т.к. функция присвоена переменной

function a(x) {
    return x * 2;
}
var a;
alert(a); //объявление переменной a будет поднято наверх, alert выведет функцию, т.е. function a(x) {
    return x * 2;
}

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3); // будет выведено 10

function a() {
    alert(this);
}

a.call(null); // при передаче null в качестве контекста выполнения this передается дефолтный объект Window, будет выведен [object Window]
