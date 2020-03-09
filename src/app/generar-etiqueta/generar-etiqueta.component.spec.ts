import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarEtiquetaComponent } from './generar-etiqueta.component';

describe('GenerarEtiquetaComponent', () => {
  let component: GenerarEtiquetaComponent;
  let fixture: ComponentFixture<GenerarEtiquetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarEtiquetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
