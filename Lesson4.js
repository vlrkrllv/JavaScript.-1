let numberToCheck = parseInt(prompt("Введите число от 0 до 999" ));
let numberCharacteristics = {
    units : 0,
    tens: 0,
    hundreds : 0,
};
if (isNaN(numberToCheck) || numberToCheck < 0 || numberToCheck > 999) {
    alert("Невалидный ввод. Введите число от 0 до 999")
} else {
    numberCharacteristics.units = numberToCheck % 10;
    numberCharacteristics.tens = Math.floor(numberToCheck / 10 % 10);
    numberCharacteristics.hundreds = Math.floor(numberToCheck / 100 % 10);
}

console.log(numberCharacteristics);
