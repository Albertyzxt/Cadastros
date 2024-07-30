const prompt = require("prompt-sync")({ sigint: true });

const {
  create,
  read,
  update,
  del,
} = require("./functionsIndex.js");

const menucadastro = () => {
  while (true) {
    console.log(`
    === Menu de Cadastros ===
    1. Adicionar um novo cadastro
    2. Listar cadastros
    3. Atualizar um cadastro
    4. Deletar um cadastro
    0. Sair
    `);

    let opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        create();
        break;
      case "2":
        read();
        break;
      case "3":
        update();
        break;
      case "4":
        del();
        break;
      case "0":
        console.log("Saindo do menu, até mais!");
        return;
      default:
        console.log("Você deve selecionar um número do menu.");
        return;
    }
  }
};

menucadastro();