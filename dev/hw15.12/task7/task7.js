let anagrams = (arr, str1) => {
    const map = {},
          result = [];
    for (let w of str1) map[w] = map[w] ? ++map[w] : 1;
    for (let i = 0; i < arr.length; i++) {
      let found = true,
          word = JSON.parse(JSON.stringify(map));
      for (let letter of arr[i]) {
        if (!word[letter] || str1.length > arr[i].length) {
          found = false;
          break;
        }
        if (word[letter]) --word[letter];
        if (word[letter] === 0) delete word[letter];
      }
      if (found) result.push(arr[i])
    }
    return result;
  }
console.log(anagrams(['потоп', 'топто', 'просто', 'отрок'], 'топот'));