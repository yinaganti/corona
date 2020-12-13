import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from './../../model/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router : Router, private _route : ActivatedRoute) { }

  ngOnInit() {
  }

  onAndra() {
    this._router.navigate([Constants.ANDRA],{relativeTo:this._route});
  }
  onTelangana() {
    this._router.navigate([Constants.TELENGANA],{relativeTo:this._route});
  }
}
