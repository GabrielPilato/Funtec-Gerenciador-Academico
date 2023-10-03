import { Component, OnInit, ViewChild } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {

  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAlunos();
  }

  private getAlunos() {
    this.alunoService.getAlunosList().subscribe(data => {
      this.alunos = data;
    })

  }

  alunoDetails(id: number) {
    this.router.navigate(['aluno-details', id]);
  }

  updateAluno(id: number) {
    this.router.navigate(['update-aluno', id]);
  }

  deleteAluno(id: number) {
    let config = new MatSnackBarConfig();
    config.duration = 4000;
    this.alunoService.deleteAluno(id).subscribe(data => {
      console.log(data);
      this.getAlunos();
      this.snackBar.open("Aluno excluído com sucesso!", "", config);
    })
  }

  createAluno() {
    this.router.navigate(['create-aluno']);
  }
}
