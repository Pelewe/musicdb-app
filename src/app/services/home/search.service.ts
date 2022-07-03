import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private apiService: ApiService) { }

  advancedSearch(searchParams:any){
    return this.apiService.get(`/search`,false,searchParams)
  }
}
