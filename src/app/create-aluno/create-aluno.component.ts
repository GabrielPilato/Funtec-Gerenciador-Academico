import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.css']
})
export class CreateAlunoComponent implements OnInit {

  aluno: Aluno = new Aluno();

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {

  }

  saveAluno() {
    let config = new MatSnackBarConfig();
    config.duration = 4000;
    if (this.aluno.nome === "" || this.aluno.cpf === "" || !this.aluno.dt_nascimento) {

      this.snackBar.open("Favor preencher todas as informações corretamente", "", config);

    }
    else if (this.aluno.cpf.length < 11) {
      this.snackBar.open("Favor preencher CPF corretamente", "", config);
    }
    else {
      this.alunoService.createAluno(this.aluno).subscribe(data => {
        console.log(data);
        this.snackBar.open("Aluno cadastrado com sucesso!", "", config);
        this.goToAlunoList();
      })
    }

  }

  goToAlunoList() {
    this.router.navigate(['/alunos']);
  }

  onSubmit() {
    console.log(this.aluno);
    this.saveAluno();
  }
}
