import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-aluno',
  templateUrl: './update-aluno.component.html',
  styleUrls: ['./update-aluno.component.css']
})
export class UpdateAlunoComponent implements OnInit {

  id: number = 0;
  aluno: Aluno = new Aluno();

  constructor(private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.alunoService.getAlunobyId(this.id).subscribe(data => {
      this.aluno = data;
      console.log(this.aluno.dt_nascimento);
      this.aluno.dt_nascimento = new Date(data.dt_nascimento);

    }, erro => console.log(erro));

  }


  onSubmit() {
    let config = new MatSnackBarConfig();
    config.duration = 4000;
    if (this.aluno.nome === "" || this.aluno.cpf === "" || !this.aluno.dt_nascimento) {

      this.snackBar.open("Favor preencher todas as informações corretamente", "", config);

    }
    else
    {
      this.alunoService.updateAluno(this.id, this.aluno).subscribe(data => {
        this.snackBar.open("Aluno atualizado com sucesso!", "", config);
        this.goToAlunoList();
      })
    }

  }

  goToAlunoList() {
    this.router.navigate(['/alunos']);
  }


}
