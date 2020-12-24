// Создать массив, длину и элементы которого задаёт пользователь (строковые значения). Затем отсортировать массив по возрастанию. Затем, удалить элементы из массива с 2 по 4 (если длина меньше 4 вывести сообщение). По мере изменений, выводить содержимое массива на страницу.
let arr = [];
arrLength = +prompt('What length array do you want?');
for (let i = 0; i < arrLength; i++) {
	arr.push(prompt(`Enter ${i+1} values`));
}
alert(`Your array: \n${arr}`);

arr.sort();
alert(`Sorted by highest: \n${arr}`);

let resultRemoved = arr.splice(1,2);
alert(`Removed these ${resultRemoved} elements from the array`);

if (arr.length < 4) {
	alert('Array length is less than 4 elements');
} else {
	alert(`Your array: \n${arr}`);
}

