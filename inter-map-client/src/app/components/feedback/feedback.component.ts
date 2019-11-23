import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  items: any;
  constructor() { }

  ngOnInit() {
    this.items = [
      {title: 'Cea mai utila aplicatie!', date: '14 November 2019', username: 'David Barbulescu', hidden: false,
      text: 'Folosind InternMAP am scapat de tama CV-ului si de stresul ca voi uita firmele la care am aplicat. ' +
        'Recomand oricarui student sa foloseasca aceasta platforma pentru a-si usura viata.'},
      {title: 'title', date: '15 November 2019', username: 'Felix Mada', hidden: true,
      text: 'Organizarea documentelor nu a fost niciodata unul dintre atuurile mele, insa InternMAP m-a ajutat sa ' +
        'scap de grija asta su astfel am ajuns sa lucrez la fisrma visurilor mele in doar cativa pasi simpli.'},
      {title: 'title', date: '15 December 2019', username: 'Florentina Pop', hidden: true,
      text: 'Ce pot spune despre InternMAP mai mult decat s-a spus deja? E harta ce iti intruma pasii catre un viitor straucitor.' +
        'Se vede ca e facuta din suflet, de studenti, pentru studenti'},
      {title: 'title', date: '17 December 2019', username: 'Ernest Ardelean', hidden: true,
      text: 'Explorarea hartii InternMAP e plina de informatii utile si usor de accesat. Sunt incantat de ideea ca pot ' +
        'gasi firmele si internshipurile lor, toate intr-un singur loc, lucru ce ma ajuta sa imi pun mai rapid optiunile ' +
        'in balanta si sa o aleg cat mai corect pe cea mai potrivita pentru mine.'},
      {title: 'title', date: '20 December 2019', username: 'Maria Ianovici', hidden: true,
      text: 'Sunt o persoana foarte curioasa din fire dar care adora lucrurile bine organizate. InternMAP este solutia perfecta pentru ' +
        'mine deoarece imi ofera posibilitatea de a avea toate aplicarile intr-un singur loc, permitandu-mi sa le evaluez la final ' +
        'si sa testez cat mai multe domenii'}
      ];
  }

  toggle(items: any, item: any) {
    for (const itemm of items) {
        itemm.hidden = true;
    }
    item.hidden = !item.hidden;
  }

}
