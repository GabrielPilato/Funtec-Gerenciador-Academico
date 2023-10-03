import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';
import { Router } from '@angular/router';
import { SelectButtonModule } from 'primeng/selectbutton';
import { WeekDay } from '@angular/common';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.css']
})
export class CreateCursoComponent implements OnInit{

  curso: Curso = new Curso();

  opcoes: any[] = [{name: "Segunda-feira", dias_de_curso: 0},
  {name: "Terça-feira", dias_de_curso: 1},
  {name: "Quarta-feira", dias_de_curso: 2},
  {name: "Quinta-feira", dias_de_curso: 3},
  {name: "Sexta-feira", dias_de_curso: 4},
  {name: "Sábado", dias_de_curso: 5},
  {name: "Domingo", dias_de_curso: 6},]

 

  constructor(private cursoService: CursoService,
              private router: Router,
              private snackBar: MatSnackBar){
              }

    ngOnInit(): void {
        
    }

    saveCurso()
    {
      let config = new MatSnackBarConfig();
      config.duration = 4000;
      if (this.curso.nome_curso === "" || this.curso.descricao_curso === "" || this.curso.carga_horaria === 0 || !this.curso.carga_horaria || !this.curso.carga_horaria_diaria
          || this.curso.carga_horaria_diaria === 0 || !this.curso.dt_inicio || !this.curso.dt_final || this.curso.dias_de_curso.length === 0) {

        this.snackBar.open("Favor preencher todas as informações corretamente", "", config);
  
      }
      else {
      this.cursoService.createCurso(this.curso).subscribe(data =>{
        console.log(data);
        this.snackBar.open("Curso criado com sucesso!", "", config);
        this.goToCursoList();
      })
    }
    }

  goToCursoList()
  {
    this.router.navigate(['/cursos']);
  }

  onSubmit()
  {
    console.log(this.curso);
    this.saveCurso();
  }

}
