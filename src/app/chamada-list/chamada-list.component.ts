import { Component, OnInit } from '@angular/core';
import { Chamada } from '../chamada';
import { ChamadaService } from '../chamada.service';
import { Router } from '@angular/router';
import { ChamadaId } from '../chamadaId';

@Component({
  selector: 'app-chamada-list',
  templateUrl: './chamada-list.component.html',
  styleUrls: ['./chamada-list.component.css']
})
export class ChamadaListComponent implements OnInit {

  chamadas: Chamada[] = [];

  constructor(private chamadaService: ChamadaService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getChamadas();
  }

  private getChamadas() {
    this.chamadaService.getChamadaList().subscribe(data => {
      this.chamadas = data;
    })

  }

  chamadaDetails(idTurma: number, idAluno: number, dt_chamada: Date) {
    this.router.navigate(['chamada-details', idTurma, idAluno, dt_chamada]);
  }

  updateChamada(id: ChamadaId) {
    this.router.navigate(['update-chamada', id]);
  }

  deleteChamada(id: ChamadaId) {
    this.chamadaService.deleteChamada(id).subscribe(data => {
      console.log(data);
      this.getChamadas();
    })
  }

  createChamadas() {
    this.router.navigate(['create-chamadas']);
  }

  formatDate(date: Date): string {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() + '';
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1) + '';
    const year = date.getFullYear() + '';
    return `${day}-${month}-${year}`;
  }

}
