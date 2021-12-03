// Desafio 10
function techList(stacks, nome) {
  let stacksObj = [];
  let organizaStacks = stacks.sort();
  for (let index = 0; index < stacks.length; index++) {
    stacksObj[index] = new Object({ tech: organizaStacks[index], name: nome });
  }
  if (stacksObj.length === 5) {
    return stacksObj;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  let resultado;
  let numeros = array;
  if (array.length !== 11) {
    resultado = 'Array com tamanho incorreto.';
  } else if (Math.max(...numeros) > 9 || Math.min(...numeros) < 0) {
    resultado = 'não é possível gerar um número de telefone com esses valores';
  } else {
    let contador = 0;
    let vezesAlgumNumeroRepete = 0;

    for (
      let numeroDaArray = 0;
      numeroDaArray < numeros.length;
      numeroDaArray++
    ) {
      let numeroQueVerifica = numeros[numeroDaArray];
      for (let index = 0; index < numeros.length; index++) {
        if (numeroQueVerifica === numeros[index]) {
          contador += 1;
        }
      }
      if (contador > vezesAlgumNumeroRepete) {
        vezesAlgumNumeroRepete = contador;
      }
      contador = 0;
    }
    if (vezesAlgumNumeroRepete >= 3) {
      resultado =
        'não é possível gerar um número de telefone com esses valores';
    } else {
      let telefone = numeros.join('');

      resultado =
        '(' +
        telefone[0] +
        telefone[1] +
        ')' +
        ' ' +
        telefone[2] +
        telefone[3] +
        telefone[4] +
        telefone[5] +
        telefone[6] +
        '-' +
        telefone[7] +
        telefone[8] +
        telefone[9] +
        telefone[10];
    }
  }

  return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  let numerosArray = string.match(/\d+/g).map(Number);
  let coposDeAgua = 0;
  let pluralOuNao = [];

  for (let index = 0; index < numerosArray.length; index++) {
    if (typeof numerosArray[index] == 'number') {
      coposDeAgua += numerosArray[index];
    }
  }

  if (coposDeAgua > 1) {
    pluralOuNao = ' copos de água';
  } else {
    pluralOuNao = ' copo de água';
  }
  let resposta = [coposDeAgua, pluralOuNao];
  return resposta.join('');
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
