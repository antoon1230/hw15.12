let array = [];
let length = prompt("Определите длину массива");
for (let i = 0; i < length; i++) {
let arrEl = prompt("Введите число");
array.push(arrEl);
}
console.log(array);

let min1 = Math.min.apply(null, array);
let max1 = Math.max.apply(null, array);

alert('Минимальное число =', min1);
alert('Максимальное число =',max1);
