import { Component, OnInit } from '@angular/core';
import { Chamada } from '../chamada';
import { Turma } from '../turma';
import { Aluno } from '../aluno';
import { ChamadaService } from '../chamada.service';
import { TurmaService } from '../turma.service';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-create-chamada',
  templateUrl: './create-chamada.component.html',
  styleUrls: ['./create-chamada.component.css']
})
export class CreateChamadaComponent implements OnInit {

  dt_chamada: Date = new Date();
  chamada: Chamada = new Chamada();
  turmas: Turma[] = [];
  alunos: Aluno[] = [];

  constructor(private chamadaService: ChamadaService,
    private turmaService: TurmaService,
    private alunoService: AlunoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTurmas();
    this.getAlunos();
  }

  private getTurmas() {
    this.turmaService.getTurmaList().subscribe(data => {
      this.turmas = data;
    });
  }

  private getAlunos() {
    this.alunoService.getAlunosList().subscribe(data => {
      this.alunos = data;
    })

  }

  saveChamada() {

    this.chamadaService.createChamada(this.chamada.turma.id, this.chamada.aluno.id, this.dt_chamada, this.chamada).subscribe(data => {
      console.log(data);
      this.goToChamadaList();
    })
  }

  goToChamadaList() {
    this.router.navigate(['/chamadas']);
  }

  onSubmit() {
    console.log(this.chamada);
    this.saveChamada();
  }

  show() {
    const format = formatDate(this.dt_chamada, 'dd/MM/yyyy:HH:mm', 'en-US');
    console.log(this.chamada.turma.id + this.chamada.aluno.id + "" + format);
  }

}
