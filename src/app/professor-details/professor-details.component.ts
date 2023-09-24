import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';
import { ActivatedRoute } from '@angular/router';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.css']
})
export class ProfessorDetailsComponent implements OnInit{

  id: number = 0;
  professor: Professor = new Professor();

  constructor(private route: ActivatedRoute,
              private professorService: ProfessorService) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.professor = new Professor();
      this.professorService.getProfessorbyId(this.id).subscribe(data =>{
        this.professor = data;
      });
  }

}
