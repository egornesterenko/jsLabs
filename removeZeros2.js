'use strict';

function removeZeros(array) {
  for(let i = array.length - 1; i >= 0; i--) {
    if(array[i] === 0 || array[i] === '0') {
      let j = i;
      while((j+1 < array.length) && (array[j+1] !== 0 && array[j+1] !== '0')) { 
        var a = array[j];
        array[j] = array[j+1];
        array[j+1] = a;
        j++;
      }
    }
  }

  return array;
}