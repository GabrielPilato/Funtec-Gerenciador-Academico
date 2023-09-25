import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-details',
  templateUrl: './curso-details.component.html',
  styleUrls: ['./curso-details.component.css']
})
export class CursoDetailsComponent implements OnInit{

  id: number = 0;
  curso: Curso = new Curso();

  constructor(private route: ActivatedRoute,
              private cursoService: CursoService) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.curso = new Curso();
      this.cursoService.getCursoById(this.id).subscribe(data =>{
        this.curso = data;
      });
  }

}
