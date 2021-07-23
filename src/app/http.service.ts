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
    return this.http.get<GeoInterface>("https://ipgeolocation.abstractapi.com/v1/?api_key=03e26f248bdc4b04ac58a592df979eae");
  }

  
}
