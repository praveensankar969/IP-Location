import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, shareReplay} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { GeoInterface } from './GeoInterface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http : HttpClient) {
  }

  GetLocation()  {
    return this.http.get<GeoInterface>("http://api.ipstack.com/check?access_key=e6d5204a6d88b1cf7041817ef0b3e34c");
  }

  
}
