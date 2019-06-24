import { TestBed } from '@angular/core/testing';

import { NodetaskService } from './nodetask.service';

describe('NodetaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NodetaskService = TestBed.get(NodetaskService);
    expect(service).toBeTruthy();
  });
});
