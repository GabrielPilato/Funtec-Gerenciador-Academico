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
  selector: 'app-create-lista-chamada',
  templateUrl: './create-lista-chamada.component.html',
  styleUrls: ['./create-lista-chamada.component.css']
})
export class CreateListaChamadaComponent implements OnInit {

  dt_chamada: Date = new Date();
  chamada: Chamada = new Chamada();
  chamadas: Chamada[] = [];
  turmas: Turma[] = [];
  alunos: Aluno[] = [];

  presencas: number[] = [0, 1, 2, 3, 4, 5];

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
    this.chamadasCadastrados = [];
    this.chamadaService.getChamadaListCadastradosByTurma(this.chamada.turma.id).subscribe(data => {
      this.chamadasCadastrados = data;

    })
  }

  private getTurmas() {
    this.turmaService.getTurmaList().subscribe(data => {
      this.turmas = data;
      this.chamada.turma.id = this.turmas[0].id;
      this.getCadastrados();
    });

  }

  private getAlunos() {
    this.alunoService.getAlunosList().subscribe(data => {
      this.alunos = data;
      for (let i = 0; i < this.alunos.length; i++) {
        this.alunos[i].presenca = 5;
      }
    })

  }

  saveChamada() {
    //----------------------------------------------------------------------------------------------
    for (let i = 0; i < this.chamadasCadastrados.length; i++) {
      this.idAlunos[i] = this.chamadasCadastrados[i].id.alunoId;
    }
    console.log(this.idAlunos);
    for (let i = 0; i < this.chamadasCadastrados.length; i++) {
      let chamada: Chamada = new Chamada();

      chamada.cadastro = false;


      chamada.presenca = this.alunos[this.idAlunos[i] - 1].presenca;
      console.log(chamada);

      this.chamadas.push(chamada);

    }
    const format = formatDate(this.dt_chamada, 'dd-MM-yyyy:HH:mm', 'en-US');
    this.chamadaService.createListaChamada(this.chamada.turma.id, format, this.idAlunos, this.chamadas).subscribe(data => {
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
        return true;
      }
    }
    return false;
  }

  show() {

    console.log(this.chamada.turma.id);

  }

  addIdAluno(idAluno: number) {

    if (this.idAlunos.includes(idAluno)) {
      this.idAlunos.splice(this.idAlunos.indexOf(idAluno), 1);

    }
    else {
      this.idAlunos.push(idAluno);
      this.chamadas.push

    }
    console.log(this.idAlunos);

  }

  desCheckar() {
    for (let i = 0; i < this.alunos.length; i++) {
      this.alunos[i].checkado = false;
    }
    this.idAlunos = [];
    this.chamadas = [];

    this.getCadastrados();
  }

  showids() {
    this.idAlunos = [];

    for (let i = 0; i < this.chamadasCadastrados.length; i++) {

      console.log("Printando pelo idAlunos")

      this.idAlunos[i] = this.chamadasCadastrados[i].id.alunoId;

      console.log(this.idAlunos[i]);
      let teste: number = this.idAlunos[i];
      console.log(this.alunos[this.idAlunos[i]-1]);
    }
    console.log("ID dos alunos");
    console.log(this.idAlunos[0]);
    console.log(this.alunos);
    console.log("Chamadas cadastrados");
    console.log(this.chamadasCadastrados);
    for (let i = 0; i < this.chamadasCadastrados.length; i++) {

      console.log("presenca: ")
      console.log(this.alunos[this.idAlunos[i] - 1].presenca);
    }



    console.log("alunos");
    console.log(this.alunos);
    for (let i = 0; i < this.alunos.length; i++) {
      console.log(this.alunos[i]);
    }

    for (let i = 0; i < this.chamadasCadastrados.length; i++) {
      let chamada: Chamada = new Chamada();

      chamada.cadastro = false;


      chamada.presenca = this.alunos[i].presenca;
      console.log("Chamada: ");
      console.log(chamada);

      this.chamadas.push(chamada);

    }



  }





}
