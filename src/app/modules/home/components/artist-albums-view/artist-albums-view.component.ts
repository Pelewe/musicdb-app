import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-albums-view',
  templateUrl: './artist-albums-view.component.html',
  styleUrls: ['./artist-albums-view.component.scss']
})
export class ArtistAlbumsViewComponent implements OnInit {

  @Input('albums') albums!:any

  constructor() { }

  ngOnInit(): void {  }

  viewAlbum(album:any){
    console.log(album)
  }
}
