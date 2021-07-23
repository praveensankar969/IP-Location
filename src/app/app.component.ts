import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { DomSanitizer } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';
import { GeoInterface } from './GeoInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  locationChecked : boolean = false;
  mapUrl : string = "";
  ip : string = "0.0.0.0";
  locData! : GeoInterface; 
  constructor(private httpService :  HttpService, public sanitizer : DomSanitizer){
  }

  ngOnInit(){  
    this.httpService.GetLocation().subscribe(res=> {this.locData=res;this.mapUrl = "https://maps.google.com/maps?q="+res.latitude+","+res.longitude+"&output=embed"}); 
  }

  OnClick(){
    this.locationChecked = true;
    this.ip = this.locData.ip_address;
    console.log(this.locData);
  }
  

}
