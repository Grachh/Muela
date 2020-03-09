import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetaEnvioComponent } from './etiqueta-envio.component';

describe('EtiquetaEnvioComponent', () => {
  let component: EtiquetaEnvioComponent;
  let fixture: ComponentFixture<EtiquetaEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtiquetaEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiquetaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
