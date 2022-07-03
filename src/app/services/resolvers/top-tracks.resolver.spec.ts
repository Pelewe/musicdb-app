import { TestBed } from '@angular/core/testing';

import { TopTracksResolver } from './top-tracks.resolver';

describe('TopTracksResolver', () => {
  let resolver: TopTracksResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TopTracksResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
