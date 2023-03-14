let ultimoNumero = 1;
let penultimoNumero = 0;
let numeroAtual = 0;
let termo = 23;  // valor definido pelo usuário
let fibonacci = [0, 1];

//calcula a sequência de fibonnaci
for(let i = 3 ; i <= termo ; i++){
  numeroAtual = ultimoNumero + penultimoNumero;
  penultimoNumero = ultimoNumero;
  ultimoNumero = numeroAtual;
  fibonacci.push(ultimoNumero);
 }

 console.log(fibonacci); //imprime a sequência no console

 incluidoOuNao(fibonacci, termo);


 //função que verifica se o termo de busca está presente na sequência
 function incluidoOuNao(array, termoDeBusca) {
  let incluidoOuNaoIncluido = array.includes(termoDeBusca);

  if(incluidoOuNaoIncluido) {
    console.log("O número informado pertence a sequência");
  } else {
    console.log("O número informado não pertence a sequência");
  }
 }


 

