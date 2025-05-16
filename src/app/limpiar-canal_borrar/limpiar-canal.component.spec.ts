import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiarCanalComponent } from './limpiar-canal.component';

describe('LimpiarCanalComponent', () => {
  let component: LimpiarCanalComponent;
  let fixture: ComponentFixture<LimpiarCanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimpiarCanalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimpiarCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
