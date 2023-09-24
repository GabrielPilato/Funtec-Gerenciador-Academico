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


@NgModule({
  declarations: [
    AppComponent,
    CreateAlunoComponent,
    UpdateAlunoComponent,
    AlunoDetailsComponent,
    AlunoListComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [{
    provide: MAT_DATE_LOCALE, useValue: 'en-GB'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
