let min1 = Math.min.apply(null, array);
let max1 = Math.max.apply(null, array);

let array = [];
let length = prompt("Определите длину массива");
for (let i = 0; i < length; i++) {
let arrEl = prompt("Введите число");
array.push(arrEl);
}
console.log(array);

alert( min1);
alert(max1);
