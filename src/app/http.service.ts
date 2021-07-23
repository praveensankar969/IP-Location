import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeoInterface } from './GeoInterface';
import {map, shareReplay} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  obs : Observable<GeoInterface> = new Observable();
  constructor(private http : HttpClient) {
    this.obs = this.http.get<GeoInterface>("http://api.ipstack.com/check?access_key=e6d5204a6d88b1cf7041817ef0b3e34c").pipe(shareReplay());
  }

  GetLocation(){
    return this.obs;
  }

  
}