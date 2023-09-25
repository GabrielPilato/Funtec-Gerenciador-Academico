import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(private cursoService: CursoService,
    private router: Router) { }

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
    this.cursoService.deleteCurso(id).subscribe(data => {
      console.log(data);
      this.getCursos();
    })
  }

  createCurso() {
    this.router.navigate(['create-curso']);
  }

}
