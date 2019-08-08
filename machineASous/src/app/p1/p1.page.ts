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

   shopmusic: any;

   ngOnInit() {
     const shopSnd = $('audio#shopsnd')[0];
     this.shopmusic = shopSnd;
     this.shopmusic.load();
     this.shopmusic.volume = 1;
   }

   ionViewWillEnter() {
    this.shopmusic.currentTime = 0.0;
    this.shopmusic.play();
  }

  ionViewDidLeave() {
    this.shopmusic.pause();
  }

  goHome() {
    this.firstfnct.navigateForward("home");
  }
}
