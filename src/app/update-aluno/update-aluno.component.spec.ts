import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlunoComponent } from './update-aluno.component';

describe('UpdateAlunoComponent', () => {
  let component: UpdateAlunoComponent;
  let fixture: ComponentFixture<UpdateAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAlunoComponent]
    });
    fixture = TestBed.createComponent(UpdateAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
