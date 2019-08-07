import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
  goHome() {
    this.nav.navigateForward("home");
  };

  constructor(public nav: NavController) {
   
  }
  ngOnInit() {
  }

}

