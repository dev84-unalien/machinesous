import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-p2',
  templateUrl: './p2.page.html',
  styleUrls: ['./p2.page.scss'],
})
export class P2Page implements OnInit {

    trials = 5;


  constructor() { }

  ngOnInit() {
<<<<<<< HEAD

    const path = '../../assets/photo/';
    var genTime = null, tr1 = null, tr2 = null, tr3 = null;
    var rolling = false, r1 = false, r2 = false, r3 = false;
    var rndHead, r1Rnd, r2Rnd, r3Rnd, trials;

    trials = 5;
=======
    const context = this;
            const path = '../../assets/photo/';
            var genTime = null, tr1 = null, tr2 = null, tr3 = null;
    let rolling = false, r1 = false, r2 = false, r3 = false;
    var rndHead, r1Rnd, r2Rnd, r3Rnd;
>>>>>>> 9ca41a0e6189a36afde9749646cc7a174da08fd1

    $('#activate').click(function() {
        if (rolling == false) {
            if (context.trials > 0) {
                context.trials--;
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
    }

    function playing() {

            if (r1 == true) {
                r1Rnd = Math.floor(Math.random() * 6) + 1;
                rndHead = 'url(' + path + String(r1Rnd) + '.png)';
                $('#roll1').css('background-image', rndHead);
            }

            if (r2 == true) {
                r2Rnd = Math.floor(Math.random() * 6) + 1;
                rndHead = 'url(' + path + String(r2Rnd) + '.png)';
                $('#roll2').css('background-image', rndHead);
            }
            
            if (r3 == true) {
                r3Rnd = Math.floor(Math.random() * 6) + 1;
                rndHead = 'url(' + path + String(r3Rnd) + '.png)';
                $('#roll3').css('background-image', rndHead);
            }
        }

        function verdict () {
            clearInterval(genTime);
            clearTimeout(tr1);
            clearTimeout(tr2);
            clearTimeout(tr3);
            if (r1Rnd == r2Rnd == r3Rnd) {
                alert("Vous avez gagné en " + (5 - context.trials) + " essai(s)!");
                context.trials = 5;
            }
            else if (context.trials > 0) {
                alert("Perdu! Il vous reste encore " + context.trials + " essai(s)...");
            }
            else {
                alert("Perdu! Vous avez utilisé vos cinq essais, vous ne pouvez plus jouer!");
            }
            rolling = false;
        }
<<<<<<< HEAD
    }
}
=======
 }}
>>>>>>> 9ca41a0e6189a36afde9749646cc7a174da08fd1
