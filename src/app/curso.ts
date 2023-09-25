import { WeekDay } from "@angular/common";

export class Curso {
    id: number = 0;
    nome_curso: string = "";
    descricao_curso: string = "";
    carga_horaria: number = 0;
    carga_horaria_diaria: number = 0;
    dt_inicio: Date = new Date();
    dt_final: Date = new Date();
    dias_de_curso: WeekDay[] = [];
}