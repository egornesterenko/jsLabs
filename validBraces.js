
'use strict';

function validBraces(braces) {
  const arr = braces.split('');
  let counter = 0;
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') { counter++; array.push(arr[i]); } 
    else if (arr[i] === '{') { counter += 2; array.push(arr[i]); } 
    else if (arr[i] === '[') { counter += 3; array.push(arr[i]); } 
    else if (arr[i] === ')' && array[array.length - 1] === '(') { counter--; array.pop(); } 
    else if (arr[i] === '}' && array[array.length - 1] === '{') { counter -= 2; array.pop(); } 
    else if (arr[i] === ']' && array[array.length - 1] === '[') { counter -= 3; array.pop(); } 
    else  { return false; }
  }

  return !!(counter === 0 && array.length === 0);
}

console.log(validBraces('[()]'));