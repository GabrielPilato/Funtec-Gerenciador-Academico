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
import { CreateCursoComponent } from './create-curso/create-curso.component';
import { CursoDetailsComponent } from './curso-details/curso-details.component';
import { UpdateCursoComponent } from './update-curso/update-curso.component';
import { TurmaListComponent } from './turma-list/turma-list.component';
import { CreateTurmaComponent } from './create-turma/create-turma.component';
import { TurmaDetailsComponent } from './turma-details/turma-details.component';
import { UpdateTurmaComponent } from './update-turma/update-turma.component';

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
  // Cursos
  { path: 'cursos', component: CursoListComponent },
  { path: 'create-curso', component: CreateCursoComponent },
  { path: 'curso-details/:id', component: CursoDetailsComponent },
  { path: 'update-curso/:id', component: UpdateCursoComponent },
  // Turmas
  { path: 'turmas', component: TurmaListComponent },
  { path: 'create-turmas', component: CreateTurmaComponent },
  { path: 'turma-details/:id', component: TurmaDetailsComponent },
  { path: 'update-turma/:id', component: UpdateTurmaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
