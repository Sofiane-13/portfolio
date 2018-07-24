import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {

nbrProjet = 50;
projet: string[] = [];
  constructor() {
    for ( let i = 1; i <= 50; i ++) {
        this.projet[i] = 'none';
    }
  }

  ngOnInit() {
  }
showDescription(numberProject, projetID) {
  const active = this.projet[numberProject];

  for ( let i = 1; i <= 50; i ++) {
    this.projet[i] = 'none';
}
if (active === 'none') {

  this.projet[numberProject] = 'block';
} else {
  this.projet[numberProject] = 'none';
}
  const elmnt = document.getElementById(projetID);
  elmnt.scrollIntoView();
  console.log('finshow', numberProject);
}
}
