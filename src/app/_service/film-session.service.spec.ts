import { TestBed } from '@angular/core/testing';

import { FilmSessionService } from './film-session.service';

describe('FilmSessionService', () => {
  let service: FilmSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
