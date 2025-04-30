import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarDatosComponent } from './enviardatos.component';

describe('EnviarDatosComponent', () => {
  let component: EnviarDatosComponent;
  let fixture: ComponentFixture<EnviarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnviarDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
