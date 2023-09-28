import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaDetailsComponent } from './chamada-details.component';

describe('ChamadaDetailsComponent', () => {
  let component: ChamadaDetailsComponent;
  let fixture: ComponentFixture<ChamadaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChamadaDetailsComponent]
    });
    fixture = TestBed.createComponent(ChamadaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
