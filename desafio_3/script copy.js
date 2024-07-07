class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "???";
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }
}

const heroi1 = new heroi("Alaric", 50, "mago");
heroi1.atacar();

const heroi2 = new heroi("Magnus", 35, "guerreiro");
heroi2.atacar();

const heroi3 = new heroi("Cedric", 28, "monge");
heroi3.atacar();

const heroi4 = new heroi("Orion", 32, "ninja");
heroi4.atacar();

const heroi5 = new heroi("Lazar", 42, "viajante do tempo");
heroi5.atacar();