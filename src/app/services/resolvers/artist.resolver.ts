import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, mergeMap, Observable, of, take } from 'rxjs';
import { ArtistsService } from '../home/artists.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistResolver implements Resolve<boolean> {
  constructor(
    private artistService: ArtistsService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    return this.artistService.getArtist(id).pipe(
      take(1),
      mergeMap(response => {
        if(response){
          return of(response)
        } else {
          return EMPTY;
        }

      })
    )
  }
}
