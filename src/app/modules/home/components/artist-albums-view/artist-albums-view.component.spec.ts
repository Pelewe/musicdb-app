import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAlbumsViewComponent } from './artist-albums-view.component';

describe('ArtistAlbumsViewComponent', () => {
  let component: ArtistAlbumsViewComponent;
  let fixture: ComponentFixture<ArtistAlbumsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistAlbumsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistAlbumsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
