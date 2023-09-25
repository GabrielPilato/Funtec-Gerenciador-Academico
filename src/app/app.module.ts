import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAlunoComponent } from './create-aluno/create-aluno.component';
import { UpdateAlunoComponent } from './update-aluno/update-aluno.component';
import { AlunoDetailsComponent } from './aluno-details/aluno-details.component';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CustomDatePipe } from './custom.datepipe';
import { MatButtonModule } from '@angular/material/button';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { ProfessorDetailsComponent } from './professor-details/professor-details.component';
import { CreateProfessorComponent } from './create-professor/create-professor.component';
import { UpdateProfessorComponent } from './update-professor/update-professor.component';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CreateCursoComponent } from './create-curso/create-curso.component';
import {MatInputModule} from '@angular/material/input';
import { SelectButtonModule } from 'primeng/selectbutton';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CursoDetailsComponent } from './curso-details/curso-details.component';
import { UpdateCursoComponent } from './update-curso/update-curso.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateAlunoComponent,
    UpdateAlunoComponent,
    AlunoDetailsComponent,
    AlunoListComponent,
    CustomDatePipe,
    ProfessorListComponent,
    ProfessorDetailsComponent,
    CreateProfessorComponent,
    UpdateProfessorComponent,
    CursoListComponent,
    CreateCursoComponent,
    CursoDetailsComponent,
    UpdateCursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    SelectButtonModule,
    MatButtonToggleModule

  ],
  providers: [{
    provide: MAT_DATE_LOCALE, useValue: 'en-GB'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
