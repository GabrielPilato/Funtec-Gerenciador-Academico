import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoDetailsComponent } from './aluno-details.component';

describe('AlunoDetailsComponent', () => {
  let component: AlunoDetailsComponent;
  let fixture: ComponentFixture<AlunoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunoDetailsComponent]
    });
    fixture = TestBed.createComponent(AlunoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
