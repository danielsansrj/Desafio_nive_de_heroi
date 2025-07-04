//- Variáveis
let herois = []; // Array para armazenar os heróis

let nome = "Espartaco1"; // Substitua pelo nome do herói
let experiencia = 6000; // Substitua pela quantidade de experiência (XP) do herói
let nivel = ""; // Variável para armazenar o nível do herói

let heroi = {
    nome: nome,
    experiencia: experiencia,
    nivel: nivel
};

if (experiencia <= 1000) {
	nivel = "Ferro";
} else if (experiencia > 1000 && experiencia <= 2000) {
	nivel = "Bronze";
} else if (experiencia > 2000 && experiencia <= 5000) {
	nivel = "Prata";
} else if (experiencia > 5000 && experiencia <= 7000) {
	nivel = "Ouro";
} else if (experiencia > 7000 && experiencia <= 8000) {
	nivel = "Platina";
} else if (experiencia > 8000 && experiencia <= 9000) {
	nivel = "Ascendente";
} else if (experiencia > 9000 && experiencia <= 10000) {
	nivel = "Imortal";
} else if (experiencia >= 10001) {
	nivel = "Radiante";
} else {
	nivel = "Nível desconhecido";
}

//Ao final deve se exibir uma mensagem:
console.log("O Herói de nome " + nome + " está no nível " + nivel + ".");


heroi.nivel = nivel;    
herois.push(heroi); 
console.log(herois);    
