// Desafio 1
function compareTrue(a, b) {
  let resultado;
  if (a === true && b === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let arrayResposta = string.split(' ');
  return arrayResposta;
}

// Desafio 4
function concatName(array) {
  let frase = [array[array.length - 1], array[0]];
  return frase.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties * 1;
  return resultado;
}

// Desafio 6
function highestCount(array) {
  let numeros = array;
  let maiorNumero = Math.max(...array);
  let contador = 0;

  for (let index = 0; index < array.length; index++) {
    if (numeros[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  let quemPega;

  if (distanciaCat1 < distanciaCat2) {
    quemPega = 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    quemPega = 'cat2';
  } else if (distanciaCat1 === distanciaCat2) {
    quemPega = 'os gatos trombam e o rato foge';
  }
  return quemPega;
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
