import { Component, OnInit } from '@angular/core';
import { Chamada } from '../chamada';
import { Turma } from '../turma';
import { Aluno } from '../aluno';
import { ChamadaService } from '../chamada.service';
import { TurmaService } from '../turma.service';
import { AlunoService } from '../aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  idTurma: number = 0;

  constructor(private chamadaService: ChamadaService,
    private turmaService: TurmaService,
    private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    if (!this.route.snapshot.params['id']) {
      console.log("nulo?");
      console.log(this.route.snapshot.params['id'])
    }
    else {
      console.log("nao nulo");
    }





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
      this.presencas = [];
      for (let i = 0; i <= this.turmas[0].curso.carga_horaria_diaria; i++) {
        this.presencas.push(i);
      }

      this.getCadastrados();
    });

  }

  private getAlunos() {
    this.alunoService.getAlunosList().subscribe(data => {
      this.alunos = data;



      for (let i = 0; i < this.alunos.length; i++) {
        this.alunos[i].presenca = this.turmas[0].curso.carga_horaria_diaria;
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

      this.chamadasCadastrados[i].cadastro = false;

      let aluno: Aluno = new Aluno();
      aluno = this.alunos.find(x => x.id === this.chamadasCadastrados[i].aluno.id)!;

      console.log("Printando o find aluno: ")
      console.log(aluno);

      this.chamadasCadastrados[i].presenca = aluno.presenca;

      console.log("Printando chamadas cadastrados atribuindo presença")
      console.log(this.chamadasCadastrados[i]);

    }

    const format = formatDate(this.dt_chamada, 'dd-MM-yyyy:HH:mm', 'en-US');
    this.chamadaService.createListaChamada(this.chamada.turma.id, format, this.idAlunos, this.chamadasCadastrados).subscribe(data => {
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

  desCheckar(turma: Turma) {
    for (let i = 0; i < this.alunos.length; i++) {
      this.alunos[i].checkado = false;
    }
    this.idAlunos = [];
    this.chamadas = [];

    this.getCadastrados();


    this.presencas = [];
    for (let i = 0; i <= turma.curso.carga_horaria_diaria; i++) {
      this.presencas.push(i);
    }
    console.log(this.presencas);

    for (let i = 0; i < this.alunos.length; i++) {
      this.alunos[i].presenca = turma.curso.carga_horaria_diaria;
    }

  }

  showids() {
    this.idAlunos = [];

    for (let i = 0; i < this.chamadasCadastrados.length; i++) {


      console.log("Printando pelo idAlunos")

      this.idAlunos[i] = this.chamadasCadastrados[i].id.alunoId;

      console.log(this.idAlunos);
      console.log("Printando chamadas cadastrados");
      console.log(this.chamadasCadastrados);
      let aluno: Aluno = new Aluno();

      console.log(this.alunos.find(x => x.id === this.chamadasCadastrados[i].aluno.id));

      aluno = this.alunos.find(x => x.id === this.chamadasCadastrados[i].aluno.id)!;

      console.log("Printando o find aluno: ")
      console.log(aluno);

      this.chamadasCadastrados[i].presenca = aluno.presenca;

      console.log("Printando chamadas cadastrados atribuindo presença")
      console.log(this.chamadasCadastrados[i]);

    }




  }





}
