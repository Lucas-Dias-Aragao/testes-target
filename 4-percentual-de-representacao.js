const filiais = [
  {
    estado: "SP",
    faturamento: 67836.43
  },
  {
    estado: "RJ",
    faturamento: 36678.66
  },
  {
    estado: "MG",
    faturamento: 29229.88
  },
  {
    estado: "ES",
    faturamento: 27165.48
  },
  {
    estado: "Outros",
    faturamento: 19849.53
  },

]

var faturamentoTotal = 0;

for(let i = 0; i < filiais.length; i++) {    //soma o faturamento total
  faturamentoTotal += filiais[i].faturamento;
}


let percentualDeRepresentacao = 0;
for(let i = 0; i < filiais.length; i++) {
  percentualDeRepresentacao = (filiais[i].faturamento * 100) / faturamentoTotal;

  console.log(filiais[i].estado +
  " faturou " + percentualDeRepresentacao.toFixed(2) + "% do valor total");
}
