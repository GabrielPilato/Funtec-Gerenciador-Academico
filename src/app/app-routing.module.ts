import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { CreateAlunoComponent } from './create-aluno/create-aluno.component';
import { UpdateAlunoComponent } from './update-aluno/update-aluno.component';
import { AlunoDetailsComponent } from './aluno-details/aluno-details.component';

const routes: Routes = [
  {path: 'alunos', component: AlunoListComponent},
  {path: 'create-aluno', component: CreateAlunoComponent},
  //{path: '', redirectTo: 'alunos', pathMatch: 'full'},
  {path: 'update-aluno/:id', component: UpdateAlunoComponent},
  {path: 'aluno-details/:id', component: AlunoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
