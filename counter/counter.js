let reset = 0;

function counter() {
  reset += reset;
  console.log(reset);
  return reset;
}

counter();
