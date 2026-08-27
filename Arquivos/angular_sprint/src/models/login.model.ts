export class loginModel {
    constructor(
        public nome: string,
        public senha: string,
        public logarAuto: boolean
    ){}

    values() {
        return {nome: this.nome, senha: this.senha, logarAuto: this.logarAuto}
    }
}