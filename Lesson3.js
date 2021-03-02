// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

var n = 2;
while (n < 100) {
    var isPrimeNumber = true 
    
    // делим n на числа от 2 до Math.ceil(n / 2)
    var divisor = 2; 
    while (divisor <= Math.ceil(n / 2)) {
        // если n % 2 == 0 - isPrimeNumber = false, break,
        if (n % divisor == 0) {
            isPrimeNumber = false;
            break;
        } 
        divisor++;
    }
        // если не делится на 2, то продолжаем делить на числа до до Math.ceil(n / 2)
    
    if (isPrimeNumber == true) {
        console.log('Число', n, 'простое')
    }
    n++;

}
// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
var basket = [
    {
        name: "Item 1",
        priceRub: 1000,
        amount: 2,
    },
    {
        name: "Item 2",
        priceRub: 1300,
        amount: 3,
    },
    {
        name: "Item 3",
        priceRub: 1800,
        amount: 2,
    },
]

function countBasketPrice(basket) {
    var sum = 0;
    for (var item of basket) {
        sum += item.priceRub * item.amount
    }
    return sum;
}

// function countNew(basket) {
//     return Math.sum(...basket.map(({ priceRub, amount}) => priceRub * amount))
// }

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for (i = 0; i < 10; console.log(i++))
{}// здесь пусто}

// 4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

for (i = 1; i <= 20; i++) {
    console.log('x'.repeat(i))
    }
    