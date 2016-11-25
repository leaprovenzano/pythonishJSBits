

//sums and Array ...
const sum = arr => arr.reduce((x1, x2) => x1 + x2);

//3 more non-python convenience functions that should
//be self explanatory...
const distance = (a, b) => Math.abs(a - b); 

const product = arr => arr.reduce((x1, x2) => x1 * x2);

const factorial = n => {
  var p = 1;
  for (var i = 1; i <= n; i+=1){
      p *= i;
  }
  return p;
}


