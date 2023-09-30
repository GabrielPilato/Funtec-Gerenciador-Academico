import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

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
import { MatInputModule } from '@angular/material/input';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CursoDetailsComponent } from './curso-details/curso-details.component';
import { UpdateCursoComponent } from './update-curso/update-curso.component';
import { TurmaListComponent } from './turma-list/turma-list.component';
import { CreateTurmaComponent } from './create-turma/create-turma.component';
import { DropdownModule } from 'primeng/dropdown';
import { TurmaDetailsComponent } from './turma-details/turma-details.component';
import { UpdateTurmaComponent } from './update-turma/update-turma.component';
import { ChamadaListComponent } from './chamada-list/chamada-list.component';
import { CreateChamadaComponent } from './create-chamada/create-chamada.component';
import { ListboxModule } from 'primeng/listbox';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { UpdateChamadaComponent } from './update-chamada/update-chamada.component';
import { ChamadaDetailsComponent } from './chamada-details/chamada-details.component';
import { ChamadaOptionsComponent } from './chamada-options/chamada-options.component';
import { MatIconModule } from '@angular/material/icon';
import { AnimateModule } from 'primeng/animate';

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
    TurmaListComponent,
    CreateTurmaComponent,
    TurmaDetailsComponent,
    UpdateTurmaComponent,
    ChamadaListComponent,
    CreateChamadaComponent,
    UpdateChamadaComponent,
    ChamadaDetailsComponent,
    ChamadaOptionsComponent
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
    MatButtonToggleModule,
    DropdownModule,
    ListboxModule,
    CalendarModule,
    InputNumberModule,
    MatIconModule,
    AnimateModule

  ],
  providers: [{
    provide: MAT_DATE_LOCALE, useValue: 'en-GB'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
