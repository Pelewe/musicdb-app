import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private apiService: ApiService) { }

  searchArtists(searchParams:any){
    return this.apiService.get(`/search/artist/`,false,searchParams)
  }

  getArtist(id:any){
    return this.apiService.get(`/artist/${id}`)
  }
  getArtistTopTracks(id:any){
    return this.apiService.get(`/artist/${id}/top`)
  }
  getArtistAlbums(id:any){
    return this.apiService.get(`/artist/${id}/albums`)
  }
}
