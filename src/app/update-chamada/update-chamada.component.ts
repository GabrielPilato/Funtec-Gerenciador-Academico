import { Component, OnInit } from '@angular/core';
import { Chamada } from '../chamada';
import { ChamadaService } from '../chamada.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Turma } from '../turma';
import { Aluno } from '../aluno';
import { TurmaService } from '../turma.service';
import { AlunoService } from '../aluno.service';
import { ChamadaId } from '../chamadaId';

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

  constructor(private chamadaService: ChamadaService,
    private turmaService: TurmaService,
    private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.chamadaService.getChamadaById(this.id).subscribe(data => {
      this.chamada = data;
    }, erro => console.log(erro));

    this.getTurmas();
    this.getAluno();

  }

  private getTurmas() {
    this.turmaService.getTurmaList().subscribe(data => {
      this.turmas = data;
    });
  }

  private getAluno() {
    this.alunoService.getAlunosList().subscribe(data => {
      this.alunos = data;
    })

  }

  onSubmit() {
    this.chamadaService.updateChamada(this.chamada.id, this.chamada).subscribe(data => {
      this.goToChamadaList();
    })
  }

  goToChamadaList() {
    this.router.navigate(['/chamadas']);
  }

}
