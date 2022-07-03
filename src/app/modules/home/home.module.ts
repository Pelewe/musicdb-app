import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MaterialModule } from '../material/material.module';
import { ArtistViewComponent } from './components/artist-view/artist-view.component';
import { ArtistAlbumsViewComponent } from './components/artist-albums-view/artist-albums-view.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchResultsComponent,
    ArtistViewComponent,
    ArtistAlbumsViewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
