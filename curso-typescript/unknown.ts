function valorDoProcesso(valor: unknown) {
    if (typeof valor === 'string') {
      // Se o valor for uma string, podemos realizar operações específicas
      console.log(valor.toUpperCase());
    } else if (typeof valor === 'number') {
      // Se o valor for um número, podemos realizar outras operações específicas
      console.log(valor * 2);
    } else {
      // Se o valor não for uma string nem um número, fazemos um tratamento genérico
      console.log("Valor desconhecido");
    }
  }
  
  let meuValor: unknown = "Hello";
  valorDoProcesso(meuValor); // Saída: HELLO
  
  meuValor = 10;
  valorDoProcesso(meuValor); // Saída: 20
  
  meuValor = true;
  valorDoProcesso(meuValor); // Saída: Valor desconhecido
  