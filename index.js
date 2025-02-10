//Declaração de variáveis 
var nome = "joão"; // var: escopo global (evite usar)
let idade = 25; // let: escopo de bloco (recomendado)
const PI = 3.1415; //const: valor fixo que não pode ser alterado

//Tipos primitivos

let texto = 'Olá Mundo'; // string
let numero = 42; // number
let booleano = true; //boolean


//Condicional if-else
let hora = 14;
if (hora < 12) {
    console.log("Bom dia");
} else if (hora < 18) {
    console.log("Boa Tarde");
} else {
    console.log("Boa noite");
}

// switch-case para múltiplas condições
let cor = "azul";
switch (cor) {
    case "vermelho":
        console.log("A cor escolhida foi vermelha.")
        break;
    case "azul":
        console.log("A cor escolhida foi Azul.")
        break;
    default:
        console.log("Cor não reconhecida.")
}

//laços de repetição
//for - executa um bloco de código várias vezes
for (let i = 0; i < 5; i++) {
    console.log("contador:", i);
}

//while executa enquanto a condição for verdadeira
let contador = 0;
while (contador < 3) {
    console.log("Número: ", contador);
    contador++;
}

// Função tradicional
function saudacao(nome) {
    return "Olá, " + nome + "!";
}
console.log(saudacao("Maria"));

// Arrow Function (função moderna)
const dobro = (num) => num * 2;
console.log(dobro(5)); // Retorna 10

// Escopo de variáveis
let global = "Sou global";
function testarEscopo() {
    let local = "Sou local";
    console.log(global); // Acessa variável global
    console.log(local); // Acessa variável local
}
testarEscopo();

// console.log(local);  // Erro! 'local' não está acessível fora da função
// Callback function (introdução)
function processar(callback) {
    console.log("Processando...");
    callback();
}
processar(() => console.log("Finalizado!"));

// Função assíncrona (introdução)
async function pegarDados() {
    return "Dados recebidos!";
}
pegarDados().then(console.log); // Usa .then para lidar com a resposta
