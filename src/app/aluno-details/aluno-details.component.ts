import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-details',
  templateUrl: './aluno-details.component.html',
  styleUrls: ['./aluno-details.component.css']
})
export class AlunoDetailsComponent implements OnInit{

  id: number = 0;
  aluno: Aluno = new Aluno();

  constructor(private route: ActivatedRoute,
              private alunoService: AlunoService) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.aluno = new Aluno();
      this.alunoService.getAlunobyId(this.id).subscribe(data =>{
        this.aluno = data;
      });
  }


}
