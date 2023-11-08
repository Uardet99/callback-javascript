// CALLBACK //

function first() {
  console.log(1);
}
function scond(CALLBACK) {
  setTimeout(() => {
    console.log(2);
    CALLBACK();
  }, 1000);
}

function third() {
  console.log(3);
}

first();
scond(third);

