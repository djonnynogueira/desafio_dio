let resultadoPartidas = partidasRankeadas(1112, 33)

function partidasRankeadas(vitorias, derrotas) {
    let resultado = vitorias - derrotas
    return resultado
}

switch (true) {
    case resultadoPartidas <= 10:
        nivel = "XP: Ferro";
        break;
    case resultadoPartidas <= 20:
        nivel = "XP: Bronze";
        break;
    case resultadoPartidas <= 50:
        nivel = "XP: Prata";
        break;
    case resultadoPartidas <= 80:
        nivel = "XP: Ouro";
        break;
    case resultadoPartidas <= 90:
        nivel = "XP: Diamante";
        break;
    case resultadoPartidas <= 100:
        nivel = "XP: Lendário";
        break;
    default:
        nivel = "XP: Imortal";
}

console.log("O Herói tem de saldo de " + resultadoPartidas + " está no nível de " + nivel);
