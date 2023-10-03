import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Turma } from '../turma';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-blocos-turmas',
  templateUrl: './blocos-turmas.component.html',
  styleUrls: ['./blocos-turmas.component.css']
})
export class BlocosTurmasComponent implements OnInit {

  turmas: Turma[] = [];

  constructor(private turmaService: TurmaService, private router: Router){

  }

  ngOnInit(): void {
    console.log('inciando...')
    this.getturmas();
  }

  turmadetails(id: number) {

    this.router.navigate(['turmadetails', id]);

  }

  private getturmas(){

    this.turmaService.getTurmaList().subscribe(data => {

        this.turmas = data;

      })
  }

  TelaEscolha(id: number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-secondary',
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      icon: 'info',
      title: '<strong> <u> Opções: </u> </strong>',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: 'Detalhes Da Turma',
      cancelButtonText: 'Realizar Chamada',
    }).then((result) => {
      if (result.isConfirmed) {
          this.router.navigate(['turma-details', id]);
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.router.navigate(['create-lista-chamadas']);
      }
    })
  }



}
