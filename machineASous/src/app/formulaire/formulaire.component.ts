import {Component, OnInit} from '@angular/core';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
  constructor(public contact: ContactService) {}

  prenom: any;
  nom: any;
  email: any;
  message: any;

  ngOnInit() {}

  envoyer() {
    this.contact.sendData({
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      message: this.message,
    });
  }
}
