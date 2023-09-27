import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaDetailsComponent } from './turma-details.component';

describe('TurmaDetailsComponent', () => {
  let component: TurmaDetailsComponent;
  let fixture: ComponentFixture<TurmaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurmaDetailsComponent]
    });
    fixture = TestBed.createComponent(TurmaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
