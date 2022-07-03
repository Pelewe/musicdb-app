import { HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistsService } from 'src/app/services/home/artists.service';
import { CommunicationService } from 'src/app/services/utility/communication.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit,AfterViewInit {

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  results:any = [];
  loading: boolean = false;
  noDataMessage = 'Search For Artist'
  constructor(
    private commService: CommunicationService,
    private artistService: ArtistsService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.commService.trigger$.subscribe((data) => {
      this.loading = true;
      if(data.length > 0){
        let params2 = new HttpParams().set('q',data)
        this.artistService.searchArtists(params2).subscribe((response) => {
          this.length = response.total;
          this.results = response.data;
          this.pageSize = response.data.length
          if(response.data.length == 0){
            this.noDataMessage = `No search results for ${data}`
          }
          this.loading = false;
        })
      } else {
        this.length = 0;
        this.results = [];
        this.pageSize = 0
        this.loading = false;
      }
    })
    
  }
  pageEvent(event: any){
    console.log(event)
    
  }

  viewArtist(artist:any){
    this.route.navigate([`/home/${artist.id}`])
    
  }


}
