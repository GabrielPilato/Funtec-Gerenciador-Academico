import { Component } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent {

  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService, 
              private router: Router) {}

    ngOnInit(): void
    {
      this.getAlunos();
    }

    private getAlunos()
    {
      this.alunoService.getAlunosList().subscribe(data => {
        this.alunos = data;
      })
      
    }

    alunoDetails(id: number)
    {
      this.router.navigate(['aluno-details', id]);
    }

    updateAluno(id: number)
    {
      this.router.navigate(['update-aluno', id]);
    }

    deleteAluno(id: number)
    {
      this.alunoService.deleteAluno(id).subscribe(data => {
        console.log(data);
        this.getAlunos();
      })
    }
}
