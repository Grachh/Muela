import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoEtiquetaComponent } from './formato-etiqueta.component';

describe('FormatoEtiquetaComponent', () => {
  let component: FormatoEtiquetaComponent;
  let fixture: ComponentFixture<FormatoEtiquetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatoEtiquetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatoEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
