import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma';
import { ActivatedRoute } from '@angular/router';
import { TurmaService } from '../turma.service';
import { ChamadaService } from '../chamada.service';
import { Chamada } from '../chamada';

@Component({
  selector: 'app-turma-details',
  templateUrl: './turma-details.component.html',
  styleUrls: ['./turma-details.component.css']
})
export class TurmaDetailsComponent implements OnInit {

  id: number = 0;
  turma: Turma = new Turma();
  chamada: Chamada = new Chamada();

  chamadasCadastrados: Chamada[] = [];

  listaChamadas: Chamada[] = [];

  constructor(private route: ActivatedRoute,
    private turmaService: TurmaService,
    private chamadaService: ChamadaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.turmaService.getTurmaById(this.id).subscribe(data => {
      this.turma = data;
      this.chamadasCadastrados = [];

      this.chamadaService.getChamadaListCadastradosByTurma(this.turma.id).subscribe(data => {

        this.chamadasCadastrados = data;


        for (let i = 0; i < this.chamadasCadastrados.length; i++) {

          this.chamadaService.getChamadaByAluno(this.chamadasCadastrados[i].aluno.id).subscribe(data => {

            for (let j = 0; j < data.length; j++) {
              this.listaChamadas.push(data[j]);

            };

            for (let i = 0; i < this.chamadasCadastrados.length; i++) {
              console.log("entra aq?")
              let contador: number = 0;
              console.log(this.listaChamadas.length)
              for (let j = 0; j < this.listaChamadas.length; j++) {

                console.log("começando for do aluno: ")

                if (this.chamadasCadastrados[i].aluno.id == this.listaChamadas[j].aluno.id) {
                  contador = contador + this.listaChamadas[j].presenca;
                  
                  
                }
                this.chamadasCadastrados[i].presenca = contador;
                console.log(this.chamadasCadastrados[i])
              }
    
    
            }


          });


        };

        console.log("printando lista chamadas");
        console.log(this.listaChamadas);

        console.log("teste")
        console.log(this.chamadasCadastrados.length)
       


      })
    });

    this.getCadastrados();
  }

  private getCadastrados() {
    this.chamadasCadastrados = [];
    this.chamadaService.getChamadaListCadastradosByTurma(this.turma.id).subscribe(data => {
      this.chamadasCadastrados = data;
      console.log(data);

    })
  }

}
