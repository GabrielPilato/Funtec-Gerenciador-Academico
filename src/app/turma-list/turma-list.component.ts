import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma';
import { Router } from '@angular/router';
import { TurmaService } from '../turma.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.css']
})
export class TurmaListComponent implements OnInit {

  turmas: Turma[] = [];

  constructor(private turmaService: TurmaService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getTurmas();
  }

  private getTurmas() {
    this.turmaService.getTurmaList().subscribe(data => {
      this.turmas = data;
    })

  }

  turmaDetails(id: number) {
    this.router.navigate(['turma-details', id]);
  }

  updateTurma(id: number) {
    this.router.navigate(['update-turma', id]);
  }

  deleteTurma(id: number) {
    let config = new MatSnackBarConfig();
    config.duration = 4000;
    this.turmaService.deleteCurso(id).subscribe(data => {
      this.snackBar.open("Turma excluída com sucesso!", "", config);
      console.log(data);
      this.getTurmas();
    })
  }

  createTurmas() {
    this.router.navigate(['create-turmas']);
  }

}
