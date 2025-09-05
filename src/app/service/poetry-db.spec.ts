import { TestBed } from '@angular/core/testing';

import { PoetryDb } from './poetry-db';

describe('PoetryDb', () => {
  let service: PoetryDb;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoetryDb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
