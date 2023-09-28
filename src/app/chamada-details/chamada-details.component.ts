import { Component, OnInit } from '@angular/core';
import { Chamada } from '../chamada';
import { ActivatedRoute } from '@angular/router';
import { ChamadaService } from '../chamada.service';
import { ChamadaId } from '../chamadaId';

@Component({
  selector: 'app-chamada-details',
  templateUrl: './chamada-details.component.html',
  styleUrls: ['./chamada-details.component.css']
})
export class ChamadaDetailsComponent implements OnInit{

  id: ChamadaId = new ChamadaId();
  chamada: Chamada = new Chamada();

  constructor(private route: ActivatedRoute,
              private chamadaService: ChamadaService) {}

  ngOnInit(): void {
      this.id.turmaId = this.route.snapshot.params['idTurma'];
      this.id.alunoId = this.route.snapshot.params['idAluno'];
      this.id.dt_chamada = this.route.snapshot.params['dt_chamada'];

      this.chamadaService.getChamadaById(this.id).subscribe(data =>{
        this.chamada = data;
      });
  }

}
