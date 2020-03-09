import { TestBed } from '@angular/core/testing';

import { EtiquetasenvioService } from './etiquetasenvio.service';

describe('EtiquetasenvioService', () => {
  let service: EtiquetasenvioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtiquetasenvioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
