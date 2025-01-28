
const array1 = [1, 2, 3, 4];

const getMax = (a, b) => Math.max(a, b);
//const getMax = function(a, b) { return Math.max(a, b); }

const out = array1.reduce(getMax, 5000);

//const out2 = [40, 50, 60].reduce(getMax);


console.log(out)