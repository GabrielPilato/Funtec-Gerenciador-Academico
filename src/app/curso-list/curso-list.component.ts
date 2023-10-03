import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(private cursoService: CursoService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCursos();
  }

  private getCursos() {
    this.cursoService.getCursosList().subscribe(data => {
      this.cursos = data;
    })

  }

  cursoDetails(id: number) {
    this.router.navigate(['curso-details', id]);
  }

  updateCurso(id: number) {
    this.router.navigate(['update-curso', id]);
  }

  deleteCurso(id: number) {
    let config = new MatSnackBarConfig();
    config.duration = 4000;
    this.cursoService.deleteCurso(id).subscribe(data => {
      this.snackBar.open("Curso excluído com sucesso!", "", config);
      console.log(data);
      this.getCursos();
    })
  }

  createCurso() {
    this.router.navigate(['create-curso']);
  }

}
