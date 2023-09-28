import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChamadaComponent } from './update-chamada.component';

describe('UpdateChamdaComponent', () => {
  let component: UpdateChamadaComponent;
  let fixture: ComponentFixture<UpdateChamadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateChamadaComponent]
    });
    fixture = TestBed.createComponent(UpdateChamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
