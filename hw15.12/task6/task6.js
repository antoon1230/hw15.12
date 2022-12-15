let a = prompt('Введите слово');
function reverseString(str) {
    return str.split("").reverse().join("");
  }
let b = reverseString(a);
if (a == b) (alert('Слово является палиндромом'));
if (a != b) (alert('Слово не является палиндромом'));