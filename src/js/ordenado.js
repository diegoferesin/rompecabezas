var ordenado = true;
var arr = [1, 33, 67, 5];

for (var i = 0; i < arr.length; i++) {
  if (i !== arr.length) {
    if (arr[i] > arr[i + 1]) {
      ordenado = false;
      break;
    }
  }
}

if (ordenado === true) {
  console.log('Está Ordenado Guachin!');
} else {
  console.log('No está ordenado :(');
}
