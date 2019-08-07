import {Injectable} from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  phoneNumber() {
    alert('Merci de contacter le 01 45 26 36 23');
  }

  liveTchat() {
    alert('Connexion au serveur Live Tchat');
  }

  sendData(data) {
    $.ajax({
      url: 'monServeur',
      type: 'POST',
      data: data,
      success: requete,
      error: function erreur(result) {
        alert('Error');
      },
    });

    function requete(result) {
      alert('Bravo vous êtes connecté !');
    }
  }
}
