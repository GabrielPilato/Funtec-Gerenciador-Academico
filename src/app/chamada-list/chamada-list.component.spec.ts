import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaListComponent } from './chamada-list.component';

describe('ChamadaListComponent', () => {
  let component: ChamadaListComponent;
  let fixture: ComponentFixture<ChamadaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChamadaListComponent]
    });
    fixture = TestBed.createComponent(ChamadaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
