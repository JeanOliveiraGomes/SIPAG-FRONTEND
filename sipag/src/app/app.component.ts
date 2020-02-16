import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adHood';


  private logout(){
    sessionStorage.clear();
  }


  public openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  public closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
}
