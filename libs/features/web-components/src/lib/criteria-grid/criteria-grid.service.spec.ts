/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CriteriaGridService } from './criteria-grid.service';

describe('Service: CriteriaGrid', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CriteriaGridService]
    });
  });

  it('should ...', inject([CriteriaGridService], (service: CriteriaGridService) => {
    expect(service).toBeTruthy();
  }));
});
