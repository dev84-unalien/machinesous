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

  goJouer() {
    this.firstfnct.navigateForward("p2");
  }
  goBoutique() {
    this.firstfnct.navigateForward("p1");
  }
}
