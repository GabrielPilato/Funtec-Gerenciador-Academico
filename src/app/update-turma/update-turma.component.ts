import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma';
import { TurmaService } from '../turma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../curso';
import { Professor } from '../professor';
import { ProfessorService } from '../professor.service';
import { CursoService } from '../curso.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-turma',
  templateUrl: './update-turma.component.html',
  styleUrls: ['./update-turma.component.css']
})
export class UpdateTurmaComponent implements OnInit {

  id: number = 0;
  turma: Turma = new Turma();
  cursos: Curso[] = [];
  professores: Professor[] = [];

  constructor(private turmaService: TurmaService,
    private professorService: ProfessorService,
    private cursoService: CursoService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.turmaService.getTurmaById(this.id).subscribe(data => {
      this.turma = data;
    }, erro => console.log(erro));

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

  onSubmit() {
    let config = new MatSnackBarConfig();
    config.duration = 4000;
    if (!this.turma.curso|| !this.turma.professor || this.turma.nome_turma === "") {

      this.snackBar.open("Favor preencher todas as informações corretamente", "", config);

    }else
    {
    this.turmaService.updateCurso(this.id, this.turma).subscribe(data => {
      this.snackBar.open("Turma atualizada com sucesso!", "", config);
      this.goToTurmasList();
    })
    }
  }

  goToTurmasList() {
    this.router.navigate(['/turmas']);
  }

}
