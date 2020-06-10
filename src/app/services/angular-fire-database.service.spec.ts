import { TestBed } from '@angular/core/testing';

import { AngularFireDatabaseService } from './angular-fire-database.service';

describe('AngularFireDatabaseService', () => {
  let service: AngularFireDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularFireDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
