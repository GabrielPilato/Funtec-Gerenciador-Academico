import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';
import { ProfessorService } from '../professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  professores: Professor[] = [];

  constructor(private professorService: ProfessorService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProfessores();
  }

  private getProfessores() {
    this.professorService.getProfessoresList().subscribe(data => {
      this.professores = data;
    })

  }

  professorDetails(id: number) {
    this.router.navigate(['professor-details', id]);
  }

  updateProfessor(id: number) {
    this.router.navigate(['update-professor', id]);
  }

  deleteProfessor(id: number) {
    this.professorService.deleteProfessor(id).subscribe(data => {
      console.log(data);
      this.getProfessores();
    })
  }

  createProfessor() {
    this.router.navigate(['create-professor']);
  }

}
