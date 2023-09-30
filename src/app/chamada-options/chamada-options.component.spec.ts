import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaOptionsComponent } from './chamada-options.component';

describe('ChamadaOptionsComponent', () => {
  let component: ChamadaOptionsComponent;
  let fixture: ComponentFixture<ChamadaOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChamadaOptionsComponent]
    });
    fixture = TestBed.createComponent(ChamadaOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
