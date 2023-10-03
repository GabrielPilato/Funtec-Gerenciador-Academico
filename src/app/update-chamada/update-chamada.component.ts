import { Component, OnInit } from '@angular/core';
import { Chamada } from '../chamada';
import { ChamadaService } from '../chamada.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Turma } from '../turma';
import { Aluno } from '../aluno';
import { TurmaService } from '../turma.service';
import { AlunoService } from '../aluno.service';
import { ChamadaId } from '../chamadaId';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-update-chamada',
  templateUrl: './update-chamada.component.html',
  styleUrls: ['./update-chamada.component.css']
})
export class UpdateChamadaComponent implements OnInit {

  id: ChamadaId = new ChamadaId();
  chamada: Chamada = new Chamada();
  turmas: Turma[] = [];
  alunos: Aluno[] = [];

  naturalId: string = "";
  dataFormatada: string = "";

  data: Date = new Date();

  constructor(private chamadaService: ChamadaService,
    private turmaService: TurmaService,
    private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id.alunoId = this.route.snapshot.params['idAluno'];
    this.id.turmaId = this.route.snapshot.params['idTurma'];
    this.id.dt_chamada = this.route.snapshot.params['dataFormatada'];
    this.naturalId = this.route.snapshot.params['naturalId'];
    this.dataFormatada = this.route.snapshot.params['dataFormatada'];
    this.data = this.route.snapshot.params['dt_chamada'];

    console.log("ID do aluno enviado: " + this.id.alunoId)
    console.log("ID da turma enviada:" + this.id.turmaId)
    console.log("Data da chamada enviada" + this.id.dt_chamada)

    this.chamadaService.getChamadaById(this.id).subscribe(data => {
      this.chamada = data;
      console.log(this.chamada);
      this.id.dt_chamada = new Date(this.data);

    }, erro => console.log(erro));

    this.getTurmas();
    this.getAluno();

  }

  private getTurmas() {
    this.turmaService.getTurmaList().subscribe(data => {
      this.turmas = data;

      this.turmaService.getTurmaById(this.id.turmaId).subscribe(data => {
        this.chamada.turma = data;
      })
    });
  }

  private getAluno() {
    this.alunoService.getAlunosList().subscribe(data => {
      this.alunos = data;

      this.alunoService.getAlunobyId(this.id.alunoId).subscribe(data => {
        this.chamada.aluno = data;
      })
    })

  }

  onSubmit() {
    this.chamadaService.updateChamada(this.chamada.naturalId, this.chamada).subscribe(data => {
      this.goToChamadaList();
    })
  }

  goToChamadaList() {
    this.router.navigate(['/chamadas']);
  }

  show() {
    console.log("Data ID: " + this.id.dt_chamada);
    console.log("Data Chamada: " + this.chamada.id.dt_chamada);
  }

}
