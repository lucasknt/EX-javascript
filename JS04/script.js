function calcularIdade(anoNascimento) {
  const ano = new Date().getFullYear();
  const idade = ano - anoNascimento
  console.log(ano)
  return idade;
  
}

const pessoa = {
  nome: "Pedro" ,
  ano_nascimento: 1997,
  metodo_calcular_idade: function(calcularIdade){
    return calcularIdade(this.ano_nascimento)
    
  }
}

const idade = pessoa.metodo_calcular_idade(calcularIdade);

document.write("A idade de ", pessoa.nome, " é ", idade, " anos" )
  