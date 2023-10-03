import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma';
import { TurmaService } from '../turma.service';
import { Router } from '@angular/router';
import { Curso } from '../curso';
import { Professor } from '../professor';
import { CursoService } from '../curso.service';
import { ProfessorService } from '../professor.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-turma',
  templateUrl: './create-turma.component.html',
  styleUrls: ['./create-turma.component.css']
})
export class CreateTurmaComponent implements OnInit {

  turma: Turma = new Turma();
  cursos: Curso[] = [];
  professores: Professor[] = [];

  constructor(private turmaService: TurmaService,
    private cursoService: CursoService,
    private professorService: ProfessorService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCursos();
    this.getProfessores();
  }

  private getProfessores() {
    this.professorService.getProfessoresList().subscribe(data => {
      this.professores = data;
    });
  }

  private getCursos() {
    this.cursoService.getCursosList().subscribe(data => {
      this.cursos = data;
    })

  }

  saveTurma() {
    let config = new MatSnackBarConfig();
    config.duration = 4000;
    if (!this.turma.curso|| !this.turma.professor || this.turma.nome_turma === "") {

      this.snackBar.open("Favor preencher todas as informações corretamente", "", config);

    }
    else 
    {
    this.turmaService.createTurma(this.turma.curso.id, this.turma.professor.id, this.turma).subscribe(data => {
      console.log(data);
      this.snackBar.open("Turma criada com sucesso!", "", config);
      this.goToTurmasList();
    })
    }
  }

  goToTurmasList() {
    this.router.navigate(['/turmas']);
  }

  onSubmit() {
    console.log(this.turma);
    this.saveTurma();
  }


}
