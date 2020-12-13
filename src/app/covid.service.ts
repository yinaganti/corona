import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private _covidURL = "https://api.covid19india.org/state_district_wise.json";
  constructor(private http : HttpClient) { }

  getCovidReports() : Observable<any>{
    return this.http.get<Object>(this._covidURL)
  }

}
