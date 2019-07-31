import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-p2',
  templateUrl: './p2.page.html',
  styleUrls: ['./p2.page.scss'],
})
export class P2Page implements OnInit {

  constructor() { }

  ngOnInit() {

            const path = '../../assets/photo/';
            var temps, firstTime, tr1, tr2, tr3 = null;
            var tourne, r1, r2, r3 = false;
            var rnd, tours;

            tours = 0;

            $('#active').click(function() {
                if (!tourne) {
                    $('#manche').addClass('mancheanim');
                    if (tours < 5) {
                        tours++;
                        firstTime = setTimeout(initialise, 800);
                    }
                }
            });

            function initialise() {

                $('#manche').removeClass('mancheanim');
                tourne = true;
                r1 = true;
                r2 = true;
                r3 = true;
                clearTimeout(firstTime);
                temps = setInterval(caroule, 100);
            }

            function caroule() {
                if (!tr1 && !tr2 && !tr3) {
                    tr1 = setTimeout(function() {
                        r1 = false;
                    }, 5000);
                    tr2 = setTimeout(function() {
                        r2 = false;
                    }, 7000);
                    tr3 = setTimeout(function() {
                        r3 = false;
                        clearInterval(temps);
                        verdict();
                    }, 9000);
                }

                if (r1 == true) {
                  rnd = 'url(' + path + String(Math.floor(Math.random() * 6) + 1) + '.png)';
                    $('#rouleau1').css('background-image', rnd);
                }

                if (r2 == true) {
                  rnd = 'url(' + path + String(Math.floor(Math.random() * 6) + 1) + '.png)';
                    $('#rouleau2').css('background-image', rnd);
                }

                if (r3 == true) {
                  rnd = 'url(' + path + String(Math.floor(Math.random() * 6) + 1) + '.png)';
                    $('#rouleau3').css('background-image', rnd);
                }
            }

            function verdict() {
                tourne = false;
                clearTimeout(tr1);
                clearTimeout(tr2);
                clearTimeout(tr3);
                tr1 = null;
                tr2 = null;
                tr3 = null;
            }
  


  }

}
