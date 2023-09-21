import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAlunoComponent } from './create-aluno/create-aluno.component';
import { UpdateAlunoComponent } from './update-aluno/update-aluno.component';
import { AlunoDetailsComponent } from './aluno-details/aluno-details.component';
import { AlunoListComponent } from './aluno-list/aluno-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAlunoComponent,
    UpdateAlunoComponent,
    AlunoDetailsComponent,
    AlunoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
