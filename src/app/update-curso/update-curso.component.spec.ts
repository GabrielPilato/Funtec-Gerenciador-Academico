import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCursoComponent } from './update-curso.component';

describe('UpdateCursoComponent', () => {
  let component: UpdateCursoComponent;
  let fixture: ComponentFixture<UpdateCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCursoComponent]
    });
    fixture = TestBed.createComponent(UpdateCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
