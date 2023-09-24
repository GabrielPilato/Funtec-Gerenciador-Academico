import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';
import { ProfessorService } from '../professor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-professor',
  templateUrl: './update-professor.component.html',
  styleUrls: ['./update-professor.component.css']
})
export class UpdateProfessorComponent implements OnInit {

  id: number = 0;
  professor: Professor = new Professor();

  constructor(private professorService: ProfessorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.professorService.getProfessorbyId(this.id).subscribe(data => {
      this.professor = data;
    }, erro => console.log(erro));

  }


  onSubmit() {
    this.professorService.updateProfessor(this.id, this.professor).subscribe(data => {
      this.goToProfessorList();
    })
  }

  goToProfessorList() {
    this.router.navigate(['/professores']);
  }

}
