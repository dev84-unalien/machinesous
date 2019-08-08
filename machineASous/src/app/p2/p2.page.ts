import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-p2',
  templateUrl: './p2.page.html',
  styleUrls: ['./p2.page.scss'],
})
export class P2Page implements OnInit {

    trials = 5;
    bank = 0;
    bankStr = '00000';
    firstfnct: NavController;
    constructor(nav: NavController) {
        this.firstfnct = nav;
       }
       goHome() {
        this.firstfnct.navigateForward("home");
      }

      ambiencesound: any;
      winsound: any;
      gosound: any;
      handlesound: any;
      rollinsound: any;

  ngOnInit() {
    const context = this;
    const photopath = '../../assets/photo/';
    const ambSnd = $('audio#ambiencesnd')[0];
    const winSnd = $('audio#wintheyessnd')[0];
    const gameoverSnd = $('audio#gameoversnd')[0];
    const handleSnd = $('audio#handlesnd')[0];
    const rollinSnd = $('audio#rollinsnd')[0];
    
    this.ambiencesound = ambSnd;
    this.ambiencesound.load();
    this.ambiencesound.volume = 0.25;
    this.ambiencesound.currentTime = 0.0;

    this.winsound = winSnd;
    this.winsound.load();
    this.winsound.volume = 1;
    this.winsound.currentTime = 0.0;

    this.gosound = gameoverSnd;
    this.gosound.load();
    this.gosound.volume = 1;
    this.gosound.currentTime = 0.0;

    this.handlesound = handleSnd;
    this.handlesound.load();
    this.handlesound.volume = 1;
    this.handlesound.currentTime = 0.0;

    this.rollinsound = rollinSnd;
    this.rollinsound.load();
    this.rollinsound.volume = 1;
    this.rollinsound.currentTime = 0.0;

    let genTime = null, tr1 = null, tr2 = null, tr3 = null;
    let rolling = false, r1 = false, r2 = false, r3 = false;
    let rndHead, r1Rnd, r2Rnd, r3Rnd;

    $('#activate').click(function() {
        if (rolling == false) {
            if (context.trials > 0) {
                context.trials--;
                context.handlesound.play();
                $('#handle').addClass('handleanim');
                genTime = setTimeout(initialize, 800);
            }
        }
    });

    function initialize () {

        $('#handle').removeClass('handleanim');
        rolling = true;
        r1 = true;
        r2 = true;
        r3 = true;
        tr1 = setTimeout(function() {r1 = false;}, 5000);
        tr2 = setTimeout(function() {r2 = false;}, 7000);
        tr3 = setTimeout(function() {r3 = false; verdict();}, 9000);
        clearTimeout(genTime);
        genTime = setInterval(playing, 100);
        context.rollinsound.play();
    }

    function playing() {

        if (r1 == true) {
            r1Rnd = Math.floor(Math.random() * 6) + 1;
            rndHead = 'url(' + photopath + String(r1Rnd) + '.png)';
            $('#roll1').css('background-image', rndHead);
        }

        if (r2 == true) {
            r2Rnd = Math.floor(Math.random() * 6) + 1;
            rndHead = 'url(' + photopath + String(r2Rnd) + '.png)';
            $('#roll2').css('background-image', rndHead);
        }
            
        if (r3 == true) {
            r3Rnd = Math.floor(Math.random() * 6) + 1;
            rndHead = 'url(' + photopath + String(r3Rnd) + '.png)';
            $('#roll3').css('background-image', rndHead);
        }
    }

    function verdict () {

        clearInterval(genTime);
        clearTimeout(tr1);
        clearTimeout(tr2);
        clearTimeout(tr3);

        context.rollinsound.pause();

        // r1Rnd = 1; r2Rnd = 1; r3Rnd = 1;

        if ((r1Rnd == r2Rnd) && (r1Rnd == r3Rnd)) {
            context.winsound.play();
            context.bank += 20;
            context.bankStr = context.bank.toString().padStart(5, '0');
            // context.trials = 5;
        }
        else if (context.trials == 0) {
            context.gosound.play();
        }
            rolling = false;
        }
    }

    ionViewWillEnter() {
        this.ambiencesound.play();
      }
    
      ionViewDidLeave() {
        this.ambiencesound.pause();
      }
}