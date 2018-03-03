'use strict'

function high(x) {
  const array = x.split(' ');
  const pp = [];
  for (let i = 0; i < array.length; i++) {
    let counter = 0;
    for (let k = 0; k < array[i].length; k++) { counter += array[i].charCodeAt(k) - 96; }
    pp.push(counter);
  }
  let pps = 0;
  console.log(pp);
  for (let i = 0; i < pp.length; i++) {
    if (pp[i] > pps) { pps = pp[i]; }
  }
  const ind = pp.indexOf(pps);
  console.log(ind);
  return array[ind];
}

console.log(high('man i need a taxi up to ubud'));
