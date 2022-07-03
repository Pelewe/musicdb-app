import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistAlbumsResolver } from 'src/app/services/resolvers/artist-albums.resolver';
import { ArtistResolver } from 'src/app/services/resolvers/artist.resolver';
import { TopTracksResolver } from 'src/app/services/resolvers/top-tracks.resolver';
import { ArtistViewComponent } from './components/artist-view/artist-view.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    component: ArtistViewComponent,
    resolve : {
      artist: ArtistResolver,
      toptracks: TopTracksResolver,
      albums: ArtistAlbumsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
