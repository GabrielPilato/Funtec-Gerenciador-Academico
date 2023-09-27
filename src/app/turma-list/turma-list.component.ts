import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma';
import { Router } from '@angular/router';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.css']
})
export class TurmaListComponent implements OnInit {

  turmas: Turma[] = [];

  constructor(private turmaService: TurmaService,
    private router: Router) { }

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
    this.turmaService.deleteCurso(id).subscribe(data => {
      console.log(data);
      this.getTurmas();
    })
  }

  createTurmas() {
    this.router.navigate(['create-turmas']);
  }

}
