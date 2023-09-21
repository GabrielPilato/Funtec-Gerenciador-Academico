export class Aluno {
    id: number;
    nome: string;
    cpf: string;
    dt_nascimento: Date;

    constructor(id: number, nome: string, cpf: string, dt_nascimento: Date)
    {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dt_nascimento = dt_nascimento;
    }
}