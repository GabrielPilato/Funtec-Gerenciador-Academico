import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chamada-options',
  templateUrl: './chamada-options.component.html',
  styleUrls: ['./chamada-options.component.css'],

})
export class ChamadaOptionsComponent {

  constructor(private router: Router) { }

  goToChamadas() {
    this.router.navigate(['chamadas']);
  }

  goToRealizarChamada() {
    this.router.navigate(['create-lista-chamadas']);
  }


  goToRealizarCadastro() {
    this.router.navigate(['create-lista-chamadas-cadastro']);
  }

}
