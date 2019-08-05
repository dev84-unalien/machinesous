import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import * as $ from "jquery";
@Component({
  selector: 'app-p1',
  templateUrl: './p1.page.html',
  styleUrls: ['./p1.page.scss'],
})
export class P1Page implements OnInit {
  firstfnct: NavController;

  constructor(nav: NavController) {
    this.firstfnct = nav;
   }

  ngOnInit() {
  }
  goHome() {
    this.firstfnct.navigateForward("home");
  }
}
