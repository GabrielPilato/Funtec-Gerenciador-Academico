import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-aluno',
  templateUrl: './update-aluno.component.html',
  styleUrls: ['./update-aluno.component.css']
})
export class UpdateAlunoComponent implements OnInit{

  id: number = 0;
  aluno: Aluno = new Aluno();

  constructor(private alunoService: AlunoService,
              private router: Router,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.alunoService.getAlunobyId(this.id).subscribe(data =>{
      this.aluno = data;
    }, erro => console.log(erro));
    
  }

  onSubmit()
  {
    this.alunoService.updateAluno(this.id, this.aluno).subscribe(data =>{
      this.goToAlunoList();
    })
  }

  goToAlunoList()
  {
    this.router.navigate(['/alunos']);
  }
  

}
