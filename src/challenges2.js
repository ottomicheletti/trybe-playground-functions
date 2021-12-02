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
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
