let nomeHeroi = "Djonny";
const quantidadeXp = 100001;

switch (true) {
    case quantidadeXp <= 1000:
        nivel = "XP: Ferro";
        break;
    case quantidadeXp <= 2000:
        nivel = "XP: Bronze";
        break;
    case quantidadeXp <= 5000:
        nivel = "XP: Prata";
        break;
    case quantidadeXp <= 7000:
        nivel = "XP: Ouro";
        break;
    case quantidadeXp <= 8000:
        nivel = "XP: Platina";
        break;
    case quantidadeXp <= 9000:
        nivel = "XP: Ascendente";
        break;
    case quantidadeXp <= 10000:
        nivel = "XP: Imortal";
        break;
    default:
        nivel = "XP: Radiante";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + ". \nXP: "+quantidadeXp);
