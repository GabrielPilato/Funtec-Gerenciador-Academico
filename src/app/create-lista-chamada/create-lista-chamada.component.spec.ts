import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListaChamadaComponent } from './create-lista-chamada.component';

describe('CreateListaChamadaComponent', () => {
  let component: CreateListaChamadaComponent;
  let fixture: ComponentFixture<CreateListaChamadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateListaChamadaComponent]
    });
    fixture = TestBed.createComponent(CreateListaChamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
