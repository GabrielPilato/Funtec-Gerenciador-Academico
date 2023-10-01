import { Component, OnInit } from '@angular/core';
import { Chamada } from '../chamada';
import { Turma } from '../turma';
import { Aluno } from '../aluno';
import { ChamadaService } from '../chamada.service';
import { TurmaService } from '../turma.service';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cadastro-aluno-turma',
  templateUrl: './create-cadastro-aluno-turma.component.html',
  styleUrls: ['./create-cadastro-aluno-turma.component.css']
})
export class CreateCadastroAlunoTurmaComponent implements OnInit {

  dt_chamada: Date = new Date();
  chamada: Chamada = new Chamada();
  chamadas: Chamada[] = [];
  turmas: Turma[] = [];
  alunos: Aluno[] = [];

  chamadasCadastrados: Chamada[] = [];

  idAlunos: number[] = [];

  constructor(private chamadaService: ChamadaService,
    private turmaService: TurmaService,
    private alunoService: AlunoService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getTurmas();
    this.getAlunos();
    this.getCadastrados();
    console.log(this.chamada.turma.id);
  }

  private getCadastrados() {
    this.chamadaService.getChamadaListCadastradosByTurma(this.chamada.turma.id).subscribe(data => {
      this.chamadasCadastrados = data;
    })
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
    this.chamadas[0].cadastro = true;
    this.chamadaService.createListaChamada(this.chamada.turma.id, this.dt_chamada, this.idAlunos, this.chamadas).subscribe(data => {
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

  verificacao(idAluno: number) {
    for (let i = 0; i < this.chamadasCadastrados.length; i++) {
      if (this.chamadasCadastrados[i].aluno.id == idAluno) {
        return false;
      }
    }
    return true;
  }

  show() {
    console.log(this.chamada.turma.id);
    this.idAlunos = [];
    this.getCadastrados();
  }

  addIdAluno(idAluno: number) {
    if (this.idAlunos.includes(idAluno)) {
      this.idAlunos.splice(this.idAlunos.indexOf(idAluno), 1);
    }
    else {
      this.idAlunos.push(idAluno);
    }
    console.log(this.idAlunos);
  }

}
