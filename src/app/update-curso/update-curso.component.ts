import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-curso',
  templateUrl: './update-curso.component.html',
  styleUrls: ['./update-curso.component.css']
})
export class UpdateCursoComponent implements OnInit{

  id: number = 0;
  curso: Curso = new Curso();
  dias: any[] = [1,2,3]

  constructor(private cursoService: CursoService,
    private router: Router,
    private route: ActivatedRoute) {
      this.curso.dias_de_curso = this.curso.dias_de_curso.map(x => this.curso.dias_de_curso.indexOf(x));
      
     }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cursoService.getCursoById(this.id).subscribe(data => {
      this.curso = data;
      this.curso.dias_de_curso = this.curso.dias_de_curso.map(x => this.curso.dias_de_curso.indexOf(x))
    }, erro => console.log(erro));

  }


  onSubmit() {
    this.cursoService.updateCurso(this.id, this.curso).subscribe(data => {
      this.goToCursoList();
    })
  }

  goToCursoList() {
    this.router.navigate(['/cursos']);
  }

  showDias()
  {
    console.log(this.curso.dias_de_curso);
  }

  teste()
  {
    console.log('curso dias de curso: ' + this.curso.dias_de_curso)
    console.log('dias' + this.dias);
  }

}
