// Desafio Nível de Herói com Funções
let saldoVitorias = 0;
let nivel = '';
let vitorias = 0;
let derrotas = 0; 



function gerarNumeroInteiroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroAleatorio = gerarNumeroInteiroAleatorio(1, 10);

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
function calcularSaldo(vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas;
    return saldoVitorias;

    //- e retorne o saldo de vitórias do jogador.
}    //- O saldo de vitórias é calculado subtraindo as derrotas das vitórias.
 
function pegaNivel(saldoVitorias) {
    

    //- Após calcular o saldo, determine o nível do jogador baseado no número de vitórias:
    if (saldoVitorias < 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    return {  nivel };
}

//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
while (nivel != 'Imortal') {
    
    let vitoriasRandom = gerarNumeroInteiroAleatorio(1, 10);
    let derrotasRandom = gerarNumeroInteiroAleatorio(1, 10);
    
    vitorias += vitoriasRandom;
    derrotas += derrotasRandom;

    saldoVitorias = calcularSaldo(vitorias, derrotas);
    const resultado = pegaNivel(saldoVitorias);

    nivel = resultado.nivel;

    //- e exiba o nível do jogador.
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
    vitorias += 1
}

console.log("Parabéns, você alcançou o nível Imortal!");