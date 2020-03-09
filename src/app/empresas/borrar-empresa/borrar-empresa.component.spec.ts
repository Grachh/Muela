import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarEmpresaComponent } from './borrar-empresa.component';

describe('BorrarEmpresaComponent', () => {
  let component: BorrarEmpresaComponent;
  let fixture: ComponentFixture<BorrarEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
