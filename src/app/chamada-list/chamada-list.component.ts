import { Component, OnInit } from '@angular/core';
import { Chamada } from '../chamada';
import { ChamadaService } from '../chamada.service';
import { Data, Router } from '@angular/router';
import { ChamadaId } from '../chamadaId';
import { formatDate } from '@angular/common';

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
    const format = formatDate(dt_chamada, 'dd-MM-yyyy:HH:mm', 'en-US');
    this.router.navigate(['chamada-details', idTurma, idAluno, format]);
  }

  updateChamada(idTurma: number, idAluno: number, dt_chamada: Date, naturalId: string) {
    const format = formatDate(dt_chamada, 'dd-MM-yyyy:HH:mm', 'en-US');
    this.router.navigate(['update-chamada', idTurma, idAluno, dt_chamada, naturalId, format]);
  }

  deleteChamada(id: string) {
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

  verificacao(cadastro: boolean) {
    if (cadastro == true)
    {
      return false;
    }

    else
    {
      return true;
    }
  }

}
