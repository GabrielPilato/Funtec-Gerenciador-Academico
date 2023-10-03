import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';
import { ProfessorService } from '../professor.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-professor',
  templateUrl: './create-professor.component.html',
  styleUrls: ['./create-professor.component.css']
})
export class CreateProfessorComponent implements OnInit {

  professor: Professor = new Professor();

  constructor(private professorService: ProfessorService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  saveProfessor() {
    let config = new MatSnackBarConfig();
    config.duration = 4000;
    if (this.professor.email === "" || this.professor.nome === "" || this.professor.senha === "") {

      this.snackBar.open("Favor preencher todas as informações corretamente", "", config);

    }
    else {
      this.professorService.createProfessor(this.professor).subscribe(data => {
        console.log(data);
        this.snackBar.open("Professor cadastrado com sucesso!", "", config);
        this.goToProfessorList();
      })
    }

  }

  goToProfessorList() {
    this.router.navigate(['/professores']);
  }

  onSubmit() {
    console.log(this.professor);
    this.saveProfessor();
  }

}
