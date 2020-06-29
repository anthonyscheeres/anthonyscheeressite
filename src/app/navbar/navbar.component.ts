import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataModel } from '../models/DataModel';
import { interval } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mySubscription: any;
  isLoggedIn = false;

  constructor(private _router: Router) {
    this.update();


  }

  update() {
    {
            const time = 500;
            this.mySubscription = interval(time).subscribe((x => {
        this.doStuff();
      })

      );
    }}


  doStuff() {
    let isLoggedIn = false;
    isLoggedIn = this.checkIfUserIsLoggedIn();
    this.isLoggedIn = isLoggedIn;

  }

  checkIfUserIsLoggedIn() {
    let loggedIn = false;

    try {
      const obj = JSON.parse(DataModel.account)[0];


      loggedIn = obj.token != null;
    //  console.log(loggedIn);

    } catch {

    }

    return loggedIn;
  }

  ngOnInit() {
  }

  logOut() {
    this.logOut2();
    this._router.navigate(['/']);
  }

logOut2() {
  DataModel.account = null;
  localStorage.clear();
}

}
