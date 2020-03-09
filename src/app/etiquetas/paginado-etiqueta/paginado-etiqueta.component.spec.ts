import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadoEtiquetaComponent } from './paginado-etiqueta.component';

describe('PaginadoEtiquetaComponent', () => {
  let component: PaginadoEtiquetaComponent;
  let fixture: ComponentFixture<PaginadoEtiquetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginadoEtiquetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadoEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
