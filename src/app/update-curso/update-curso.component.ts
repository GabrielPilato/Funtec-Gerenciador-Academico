import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WeekDay } from '@angular/common';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-curso',
  templateUrl: './update-curso.component.html',
  styleUrls: ['./update-curso.component.css']
})
export class UpdateCursoComponent implements OnInit {

  id: number = 0;
  curso: Curso = new Curso();
  dias: any[] = [1, 2, 3]

  constructor(private cursoService: CursoService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) {

    this.curso.dias_de_curso = this.curso.dias_de_curso.map(x => this.curso.dias_de_curso.indexOf(x));
    console.log('curso.dias_de_cursos: ' + this.curso.dias_de_curso);

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cursoService.getCursoById(this.id).subscribe(data => {
      this.curso = data;
      console.log(this.curso.dias_de_curso);
      this.curso.dias_de_curso = this.curso.dias_de_curso.map(x => this.curso.dias_de_curso.indexOf(x))
      console.log('curso.dias_de_cursos: no getById' + this.curso.dias_de_curso);
      console.log(this.curso.dias_de_curso);
    }, erro => console.log(erro));

    console.log('curso.dias_de_cursos no init: ' + this.curso.dias_de_curso);

  }


  onSubmit() {
    let config = new MatSnackBarConfig();
    config.duration = 4000;
    if (this.curso.nome_curso === "" || this.curso.descricao_curso === "" || this.curso.carga_horaria === 0 || !this.curso.carga_horaria || !this.curso.carga_horaria_diaria
      || this.curso.carga_horaria_diaria === 0 || !this.curso.dt_inicio || !this.curso.dt_final || this.curso.dias_de_curso.length === 0) {

      this.snackBar.open("Favor preencher todas as informações corretamente", "", config);

    }
    else {
      this.cursoService.updateCurso(this.id, this.curso).subscribe(data => {
        this.snackBar.open("Curso atualizado com sucesso!", "", config);
        this.goToCursoList();
      })
    }
  }

  goToCursoList() {
    this.router.navigate(['/cursos']);
  }

  showDias() {
    console.log(this.curso.dias_de_curso);
  }

  teste() {
    console.log('curso dias de curso: ' + this.curso.dias_de_curso)
    console.log('dias' + this.dias);
  }

}
