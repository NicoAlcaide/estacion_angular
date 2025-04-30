import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarCsvComponent } from './enviar-csv.component';

describe('EnviarCsvComponent', () => {
  let component: EnviarCsvComponent;
  let fixture: ComponentFixture<EnviarCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnviarCsvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
