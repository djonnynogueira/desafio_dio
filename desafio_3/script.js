class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    dadosHeroi() {
        console.log(`O heroi ${this.nome} tem ${this.idade} e é do tipo ${this.tipo}`)
    }

    atacar() {
        switch (this.tipo) {
            case "mago":
                console.log(`O ${this.tipo} atacou usando magia.`)
                break
            case "guerreiro":
                console.log(`O ${this.tipo} atacou usando espada.`)
                break
            case "monge":
                console.log(`O ${this.tipo} atacou usando artes marciais.`)
                break
            case "ninja":
                console.log(`O ${this.tipo} atacou usando shuriken.`)
                break
            default:
                console.log("Sem ataque definido")
        }
    }
}

const heroi1 = new heroi("Djonny", 33, "guerreiro")

heroi1.dadosHeroi();
heroi1.atacar()