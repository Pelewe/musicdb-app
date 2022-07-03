import { TestBed } from '@angular/core/testing';

import { ArtistAlbumsResolver } from './artist-albums.resolver';

describe('ArtistAlbumsResolver', () => {
  let resolver: ArtistAlbumsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ArtistAlbumsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
