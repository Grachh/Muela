import { TestBed } from '@angular/core/testing';

import { FormatoetiquetaService } from './formatoetiqueta.service';

describe('FormatoetiquetaService', () => {
  let service: FormatoetiquetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatoetiquetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
