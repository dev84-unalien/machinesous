import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import * as $ from "jquery";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  firstfnct: NavController;

  constructor(nav: NavController) {
    this.firstfnct = nav;
  }

  intromusic: any;

  ngOnInit() {
    const introSnd = $('audio#introsnd')[0];
    this.intromusic = introSnd;
    this.intromusic.load();
    this.intromusic.volume = 1;
  }

  ionViewWillEnter() {
    this.intromusic.currentTime = 0.0;
    this.intromusic.play();
  }

  ionViewDidLeave() {
    this.intromusic.pause();
  }

  goJouer() {
    // this.intromusic.pause();
    // this.intromusic.currentTime = 0.0;
    this.firstfnct.navigateForward("p2");
  }
  
  goBoutique() {
    // this.intromusic.pause();
    // this.intromusic.currentTime = 0.0;
    this.firstfnct.navigateForward("p1");
  }
}