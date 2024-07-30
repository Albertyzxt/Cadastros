const prompt = require("prompt-sync")();

let cadastros = [];

let ultimoId = 1;

const validarEmail = (email) => {
  if (cadastros.find((cadastro) => cadastro.email == email)) {
    return false;
  }
  return true;
};

const model = (id) => {
  let nome = prompt("Digite seu nome: ");
  let email = prompt("Digite seu e-mail: ");
  const telefones = [];
  let tel;
  while (true) {
    tel = parseInt(
      prompt("Digite seus telefones, caso tenha encerrado digite '0': ")
    );
    if (tel === 0) {
      break;
    } else {
      telefones.push(tel);
    }
  }

  if (validarEmail(email)) {
    let cadastro;
    if (id === undefined) {
      cadastro = {
        id: ultimoId,
        nome,
        email,
        telefones,
      };
      id = ultimoId++;
    } else {
      cadastro = {
        id,
        nome,
        email,
        telefones,
      };
    }
    return cadastro;
  } else {
    console.log("Dados inválidos!");
  }
};

const create = () => {
  const cadastro = model();
  if (cadastro != undefined) {
    cadastros.push(cadastro);
    console.log("Cadastro criado!");
  }
};
const read = () => {
  if (cadastros.length == 0) {
    console.log("Lista de usuarios vazia");
    return false;
  } else {
    console.log(`
       ID   NOME       EMAIL           TELEFONES
      `);
    cadastros.forEach((cadastro) => {
      console.log(`
       ${cadastro.id}. ${cadastro.nome} - ${cadastro.email} - ${cadastro.telefones}
      `);
    });
    return true;
  }
};

const update = () => {
  if (listar()) {
    const id = prompt("Qual o ID do cadastro que deseja atualizar: ");

    const novo = model(id);

    const indice = cadastros.findIndex((cadastro) => id == cadastro.id);

    if (indice != -1) {
      cadastros[indice] = novo;
    } else {
      console.log("ID inexistente");
    }
  }
};

const del = () => {
  if (listar()) {
    const id = prompt("Qual o ID que deseja remover: ");

    const indice = cadastros.findIndex((cadastro) => id == cadastro.id);

    if (indice != -1) {
      cadastros.splice(indice, 1);
    } else {
      console.log("ID inexistente");
    }
  }
};

const functions = {
  create,
  read,
  update,
  del,
};

module.exports = functions;
