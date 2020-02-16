import { TestBed } from '@angular/core/testing';

import { EstabelecimentoServiceService } from './estabelecimento-service.service';

describe('EstabelecimentoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstabelecimentoServiceService = TestBed.get(EstabelecimentoServiceService);
    expect(service).toBeTruthy();
  });
});
