let reset = 0;

function counter() {
  reset += reset;
  console.log(reset);
  return reset;
}

counter();
function Decrement() {
  reset -= reset;
  console.log(reset);
  return reset;
}

Decrement();
