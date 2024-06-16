var cadastro = [];
//função que adicinoa elementos em um array
function cad(nome, telefone) {
    cadastro.push(
        { nome: nome,
          telefone: telefone 
    });
    escreveCadastro();//chama a função que escreve no console
}
//escreve no console
function escreveCadastro() {
    console.log(cadastro);
}

function escreveHTML(){
  var conteudo = ""; // Inicializa uma string vazia para acumular o conteúdo
  for (i = 0; i < cadastro.length; i++) {
      conteudo += cadastro[i].nome + " - " + cadastro[i].telefone + "<br>"; // Acumula os valores com quebra de linha
  }
  document.getElementById('mostrarCadastro').innerHTML = conteudo; 

}