import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.scss']
})
export class ArtistViewComponent implements OnInit {

  artistData: any;
  topTracks: any[] = [];
  albums: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data:any) => {
      this.artistData = data?.artist
      this.topTracks = data?.toptracks
      this.albums = data?.albums
    })
  }

  goBack(){
    this.router.navigate(['home'])
  }

}
