import { Aluno } from "./aluno";
import { ChamadaId } from "./chamadaId";
import { Turma } from "./turma";

export class Chamada {
    id: ChamadaId = new ChamadaId();
    turma: Turma = new Turma();
    aluno: Aluno = new Aluno();
    presenca: number = 0;

}