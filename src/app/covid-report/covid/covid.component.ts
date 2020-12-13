import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equalPath } from '@angular/router/src/url_tree';
import { element } from 'protractor';
import { CovidService } from 'src/app/covid.service';
import { Constants } from '../../model/constants';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  public covidReport : any;
  public confirmed = 0;
  public active = 0;
  public deceased = 0;
  public recovered = 0;
  public state;
  

  constructor(private _covidService : CovidService, private _router : Router) { } 

  ngOnInit() {
    
    this._covidService.getCovidReports().subscribe(covidDt=>{
      if( this._router.url == '/'+Constants.HOME+'/'+Constants.ANDRA && covidDt['Andhra Pradesh']) {
        this.covidReport = covidDt['Andhra Pradesh']['districtData'];
        this.state = "Andhra Pradesh";
      } else {
        this.covidReport = covidDt['Telangana']['districtData'];
        this.state = "Telangana";
      }
      Object.keys(this.covidReport).forEach(element=>{
        this.confirmed = this.confirmed + this.covidReport[element].confirmed;
        this.active = this.active + this.covidReport[element].active;
        this.deceased = this.deceased + this.covidReport[element].deceased;
        this.recovered = this.recovered + this.covidReport[element].recovered; 
       });
    });
    
  }

  andra() {
    this._covidService.getCovidReports().subscribe(covidDt=>{
      if(covidDt['Andhra Pradesh']) {
        this.covidReport = covidDt['Andhra Pradesh']['districtData'];
      } 
    });
  }

  telanga() {
    this._covidService.getCovidReports().subscribe(covidDt=>{
      if(covidDt['Telangana']) {
        this.covidReport = covidDt['Telangana']['districtData'];
      } 
    });
  }
}
