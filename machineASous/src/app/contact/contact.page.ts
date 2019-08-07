import {Component, OnInit} from '@angular/core';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  constructor(public phone: ContactService) {}

  phoneNumber() {
    this.phone.phoneNumber();
  }

  liveTchat() {
    this.phone.liveTchat();
  }

  ngOnInit() {}
}
