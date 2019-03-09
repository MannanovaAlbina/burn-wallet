import { TestBed } from '@angular/core/testing';

import { BurnWalletService } from './burn-wallet.service';

describe('BurnWalletService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BurnWalletService = TestBed.get(BurnWalletService);
    expect(service).toBeTruthy();
  });
});
