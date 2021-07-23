import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GeoInterface } from './GeoInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  locationChecked : boolean = false;
  mapUrl : string = "https://maps.google.com/maps?q=9.56566047668457,76.64415740966797&output=embed";
  locData! : GeoInterface ;  
  constructor(private httpService :  HttpService, public sanitizer : DomSanitizer){
  }

  ngOnInit(){  
    this.httpService.GetLocation().subscribe(res=> this.locData = res);
  }

  OnClick(){
    this.locationChecked = true;
  }
  

}
