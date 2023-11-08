// UNA FORMA MUY SENCILLA DE ENTERDER UN CALLBACK //

const operation = (numA, numB, op) => {
  return op(numA, numB);
};

function suma(a, b) {
  return a + b;
}

console.log(operation(3, 4, (a, b) => a + b));
console.log(operation(3, 4, (a, b) => a - b));
console.log(operation(3, 4, (a, b) => a * b));
console.log(operation(3, 4, (a, b) => a / b));
