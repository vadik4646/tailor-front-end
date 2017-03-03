/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThingService } from './thing.service';

describe('ThingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThingService]
    });
  });

  it('should ...', inject([ThingService], (service: ThingService) => {
    expect(service).toBeTruthy();
  }));
});
