let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//1.Найти сумму и количество положительных элементов.
const positiveNumSum = arr.reduce((item, index ) => item + index,0);
const positiveNum = arr.filter((item, index) => item > 0);
const positiveNumLenght = positiveNum.length;
const resultSumNumber = `Sum positive: ${positiveNumSum} \nNumber positive: ${positiveNumLenght}`;
console.log(resultSumNumber);

//2.Найти минимальный элемент массива и его порядковый номер.
const minNumber = arr.reduce((startValue, item, index, arr) => item < arr[startValue] ? index : startValue, 0);
const resultMinNumber = `Min number:${arr[minNumber]} \nPosition: ${minNumber}`;
console.log(resultMinNumber);

//3.Найти максимальный элемент массива и его порядковый номер.
const maxNumber = arr.reduce((startValue, item, index, arr) => item > arr[startValue] ? index : startValue, 0);
const resultMaxNumber = `Max number:${arr[maxNumber]} \nPosition: ${maxNumber}`;
console.log(resultMaxNumber);

//4.Определить количество отрицательных элементов.
const negativeNum = arr.filter((item, index) => item < 0);
const resultNegNumber = `Number negative: ${negativeNum.length}`;
console.log(resultNegNumber);

//5.Найти количество нечетных положительных элементов.
const NumberOdd = arr.filter((item, index) => item % 2 != 0 && item > 0);
const resultOddNumber = NumberOdd.length;
console.log(`Number odd: ${resultOddNumber}`);

//6.Найти количество четных положительных элементов.
const NumberEven = arr.filter((item, index) => item % 2 == 0 && item > 0);
const resultEvenNumber = NumberEven.length;
console.log(`Number even: ${resultEvenNumber}`);

//7.Найти сумму чётных положительных элементов.
const sumNumberEven = NumberEven.reduce((startValue, item, index, arr) => startValue + item, 0);
const resultSumNumEven = `Sum even number: ${sumNumberEven}`;
console.log(resultSumNumEven);		

//8.Найти сумму нечетных положительных элементов.
const sumNumberOdd = NumberOdd.reduce((startValue, item, index, arr) => startValue + item, 0);
const resultSumNumOdd = `Sum odd number: ${sumNumberOdd}`;
console.log(resultSumNumOdd);

//9.Найти произведение положительных элементов.
const multiplcPositiveNum = positiveNum.reduce((startValue, item, index, arr) => startValue * item);
const resultMultiplcNum = `Multiplication elements: ${multiplcPositiveNum}`;
console.log(resultMultiplcNum);

//10.Найти наибольший среди элементов массива, остальные обнулить.
let arrayZero = arr.map(item => arr[maxNumber] !== item ? 0 : item);
console.log(arrayZero);
