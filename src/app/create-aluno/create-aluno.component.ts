import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.css']
})
export class CreateAlunoComponent implements OnInit{

  aluno: Aluno = new Aluno();

  constructor(private alunoService: AlunoService, 
              private router: Router) {}

  ngOnInit(): void
  {
                  
  }

  saveAluno()
  {
    this.alunoService.createAluno(this.aluno).subscribe(data =>{
      console.log(data);
      this.goToAlunoList();
    })
  }

  goToAlunoList()
  {
    this.router.navigate(['/alunos']);
  }

  onSubmit()
  {
    console.log(this.aluno);
    this.saveAluno();
  }
}
