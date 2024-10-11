// let a = 4;
// console.log(2+(++a));
// console.log("1"+2);

let resultado;
const preco = 50;
// if (preco < 40){
//   resultado = "Barato";
// }else{
//   resultado = "Caro";
// }

// console.log(resultado);

resultado = preco < 40 ? "Barato" : "Caro"

const meuArray = [1,2,3]

const meuObjeto = {
  nome: "Uma propriedade",
  numero: 2,
  endereco: {
    rua: "rua1",
    numero: 40
  }
}

let minhavar = "rua"

function soma (a,b){
  return a+b;
}

const anonima = function (a,b){
  return a+b;
}

const arrow = (a, b) => {
  return a + b;
}

const arrow2 = (a,b) => a+b;

const arrow3 = a => a+2;

const dobro = elemento => (console.log(elemento*2));
