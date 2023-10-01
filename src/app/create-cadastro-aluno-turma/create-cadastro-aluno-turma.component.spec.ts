import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCadastroAlunoTurmaComponent } from './create-cadastro-aluno-turma.component';

describe('CreateCadastroAlunoTurmaComponent', () => {
  let component: CreateCadastroAlunoTurmaComponent;
  let fixture: ComponentFixture<CreateCadastroAlunoTurmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCadastroAlunoTurmaComponent]
    });
    fixture = TestBed.createComponent(CreateCadastroAlunoTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
