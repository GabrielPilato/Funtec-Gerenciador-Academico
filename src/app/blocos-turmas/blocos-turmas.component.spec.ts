import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocosTurmasComponent } from './blocos-turmas.component';

describe('BlocosTurmasComponent', () => {
  let component: BlocosTurmasComponent;
  let fixture: ComponentFixture<BlocosTurmasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlocosTurmasComponent]
    });
    fixture = TestBed.createComponent(BlocosTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
