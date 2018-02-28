'use strict';

removeZeros = array => {
  const zero = [];
  const num = [];
  let counter = 0;
  for (let i = 0; i <= array.length-1; i++) {
    if (array[i] === '0' || array[i] === 0) {
      zero[zero.length]=array[i]
    }
    else {num[num.length]=array[i]}
  }
 for(let k = 0 ; k <= zero.length-1; k++){
    num[num.length] = zero[k];
  }  
  return num;
}

