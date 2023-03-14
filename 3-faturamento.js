const dados = require("./dados.json"); //faz a requisição dos dados

var faturamento = 0;
var diasDeFaturamento = 0;

menorFaturamento(dados); //função que retorna o menor faturamento do mês
maiorFaturamento(dados); //função que retorna o maior faturamento do mês
calculaFaturamento(dados);
somaDiasDeFaturamento(dados);

let mediaMensal = faturamento / diasDeFaturamento;
console.log("Media Mensal: " + mediaMensal);

diasQueOFaturamentoFoiAcimaDaMediaMensal(dados); //exibe o total de dias em que o faturamento foi maior que a média mensal



function diasQueOFaturamentoFoiAcimaDaMediaMensal(dados) {
  let diasDeFaturamentoAcimaDaMedia = 0;

  for(let i = 0; i < dados.length; i++) {
    if(dados[i].valor > mediaMensal) {
      diasDeFaturamentoAcimaDaMedia++;
    }
  }
  console.log("A quantidade de dias que o faturamento foi acima da média mensal é: " + diasDeFaturamentoAcimaDaMedia);
}




function calculaFaturamento(dados) {
  for(let i = 0; i < dados.length; i++) {
    faturamento += dados[i].valor;
  }
}

//soma os dias que houve faturamento desconsiderando finais de semana
function somaDiasDeFaturamento(dados) {
  for(let i = 0; i < dados.length; i++) {
    if(dados[i].valor > 0) {
      diasDeFaturamento += 1;
    }
  }
}


// encontra o menor faturamento
function menorFaturamento(dados) {
  let resultado = 0;;
  
  for(let i = 0; i < dados.length; i++) {
    if(dados[i].valor < resultado) {
      resultado = dados[i].valor; 
    }
  }
  console.log("O menor faturamento do mês é: " + resultado);
}


//encontra o maior faturamento
function maiorFaturamento(dados) {
  let resultado = 0;
  let data = 0;

  for(let i = 0; i < dados.length; i++) {
    if(dados[i].valor > resultado) {
      resultado = dados[i].valor;
      data = dados[i].dia;
    }
  }
  console.log("O maior faturamento do mês é: " + resultado + " no dia: " + data);
}