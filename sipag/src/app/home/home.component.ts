import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userDetails: any = {};


  constructor() {
    this.userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
   }

  ngOnInit() {
  }

}
