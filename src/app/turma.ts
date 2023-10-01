import { Curso } from "./curso";
import { Professor } from "./professor";

export class Turma {
    id: number = 0;
    professor: Professor = new Professor();
    curso: Curso = new Curso();
    nome_turma: string = "";
}