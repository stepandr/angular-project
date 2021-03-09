import { TestBed } from '@angular/core/testing';

import { AngularTestLibService } from './angular-test-lib.service';

describe('AngularTestLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularTestLibService = TestBed.get(AngularTestLibService);
    expect(service).toBeTruthy();
  });
});
