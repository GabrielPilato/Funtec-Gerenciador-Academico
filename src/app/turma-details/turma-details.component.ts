import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma';
import { ActivatedRoute } from '@angular/router';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-turma-details',
  templateUrl: './turma-details.component.html',
  styleUrls: ['./turma-details.component.css']
})
export class TurmaDetailsComponent implements OnInit{

  id: number = 0;
  turma: Turma = new Turma();

  constructor(private route: ActivatedRoute,
              private turmaService: TurmaService) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.turmaService.getTurmaById(this.id).subscribe(data =>{
        this.turma = data;
      });
  }

}
