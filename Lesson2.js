// 1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2, префиксный инкремент выполняет увеличение а на 1 перед ее присваиванием переменной с
d = b++; alert(d);           // 1, постфиксный инкремент выполняет увеличение b на 1 после ее присваивания, так в d записывается 1, а в b перезписывается 2
c = (2+ ++a); alert(c);      // 5, на этой строке а снова увеличивается на 1 с помощью префиксного инкремента (стала 3 и перезаписалась в а) и прибавляется к 2
d = (2+ b++); alert(d);      // 4, постфисный инкремент увеличивает b на 1 после вычисления ее значения, соответственно 2+2, и после этого в b перезаписывается 3
alert(a);                    // 3, после вычислений на 5 строке в а было перезаписано значение 3
alert(b);                    // 3, после вычислений на 6 строке в b было перезаписано значение 3
// Почему код даёт именно такие результаты?

// 2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2); //5, т.к 1 + (2 * 2) = 5

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:

var a = Math.floor(Math.random() * 31) - 15; // присвоим случайное значение [-15;15]
var b = Math.floor(Math.random() * 31) - 15; // присвоим случайное значение [-15;15]

// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else {
    alert(a + b);
}

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
 var a = Math.floor(Math.random() * 16);
 
 switch (a) {
     case 0: console.log(0);

     case 1: console.log(1);

     case 2: console.log(2);

     case 3: console.log(3);

     case 4: console.log(4);

     case 5: console.log(5);

     case 6: console.log(6);

     case 7: console.log(7);

     case 8: console.log(8);

     case 9: console.log(9);

     case 10: console.log(10);

     case 11: console.log(11);

     case 12: console.log(12);

     case 13: console.log(13);

     case 14: console.log(14);

     case 15: console.log(15);
 }

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function fraction(a, b) {
    return a / b;
}

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
arg1 = parseFloat(prompt("Введите первое число."));
arg2 = parseFloat(prompt("Введите второе число."));
operation = prompt("Введите название операции, которую нужно выполнить (сложение, вычитание, умножение, деление)").toLowerCase();
alert (mathOperation(arg1, arg2, operation));

function mathOperation (arg1, arg2, operation) {
    switch (operation) {
        case "сложение": return sum(arg1, arg2);
        break;

        case "вычитание": return diff(arg1, arg2);
        break;

        case "умножение": return mult(arg1, arg2);
        break;

        case "деление": return fraction(arg1, arg2);
        break;

        default: return "Вы ввели некорректное название операции.";
}
}

// 7) *Сравнить null и 0. Попробуйте объяснить результат.

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

// Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.
// Для нестрогого равенства "==" значения null действует особое правило: это значенияе ни к чему не приводится и оно не равно ничему другому. Поэтому (2) null == 0 ложно.

// 8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow === 0) {
        return 1;
    } else if (pow === 1) {
        return val;
    } else if (pow % 1) {
        return NaN;
    } else if (pow < 0) {
        return (1 / val) * power(val, pow + 1);
    } 

    return val * power(val, pow - 1);
}

console.log(power(2, -3));
