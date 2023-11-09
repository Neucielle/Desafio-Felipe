alert("Vamos calcular seu nível Herói?");
let nome = prompt("Digite seu nome:");
let xp = prompt("Digite sua quantidade de XP obtida no jogo:");

  if (xp < 1000) {
    alert("O Herói de nome: " + nome + " está no nível " + xp + " e é FERRO");
  } else if (xp >= 1000 && xp <= 2000) {
    alert("O Herói de nome: " + nome + " está no nível " + xp + " e é BRONZE");
  } else if (xp >= 2001 && xp <= 5000) {
    alert("O Herói de nome: " + nome + " está no nível " + xp + " e é PRATA");
  } else if (xp >= 6001 && xp <= 7000) {
    alert("O Herói de nome: " + nome + " está no nível " + xp + " e é OURO");
  } else if (xp >= 7001 && xp <= 8000) {
    alert("O Herói de nome: " + nome + " está no nível " + xp + " e é PLATINA");
  } else if (xp >= 8001 && xp <= 9000) {
    alert("O Herói de nome: " + nome + " está no nível " + xp + " e é Ascendente");
  } else if (xp >= 9001 && xp <= 10000) {
    alert("O Herói de nome: " + nome + " está no nível " + xp + " e é IMORTAL");
  } else if (xp >= 10001) {
    alert("O Herói de nome: " + nome + " está no nível " + xp + " e é RADIANTE");
  } else {
    alert("Pontuação inválida, digite uma pontuação válida!");
  }

