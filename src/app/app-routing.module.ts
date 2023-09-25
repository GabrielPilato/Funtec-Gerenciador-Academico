import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { CreateAlunoComponent } from './create-aluno/create-aluno.component';
import { UpdateAlunoComponent } from './update-aluno/update-aluno.component';
import { AlunoDetailsComponent } from './aluno-details/aluno-details.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { CreateProfessorComponent } from './create-professor/create-professor.component';
import { UpdateProfessorComponent } from './update-professor/update-professor.component';
import { ProfessorDetailsComponent } from './professor-details/professor-details.component';
import { CursoListComponent } from './curso-list/curso-list.component';

const routes: Routes = [
  // Alunos
  { path: 'alunos', component: AlunoListComponent },
  { path: 'create-aluno', component: CreateAlunoComponent },
  //{path: '', redirectTo: 'alunos', pathMatch: 'full'},
  { path: 'update-aluno/:id', component: UpdateAlunoComponent },
  { path: 'aluno-details/:id', component: AlunoDetailsComponent },
  // Professores
  { path: 'professores', component: ProfessorListComponent },
  { path: 'create-professor', component: CreateProfessorComponent },
  { path: 'update-professor/:id', component: UpdateProfessorComponent },
  { path: 'professor-details/:id', component: ProfessorDetailsComponent },
  { path: 'cursos', component: CursoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
