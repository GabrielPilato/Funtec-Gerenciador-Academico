import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChamadaComponent } from './create-chamada.component';

describe('CreateChamadaComponent', () => {
  let component: CreateChamadaComponent;
  let fixture: ComponentFixture<CreateChamadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateChamadaComponent]
    });
    fixture = TestBed.createComponent(CreateChamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
