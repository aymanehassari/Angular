import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-spammer';
  articles = new Array<string>(); //Dichiaro un array di stringhe

  addSpam(testo: HTMLInputElement, numero: HTMLInputElement) : boolean {
    let t = testo.value; //qui prendo il testo dalla casella di testo 1
    let n = Number(numero.value); //qui prendo il numero dalla casella di testo 2

    for (let index = 0; index < n; index++) {
      this.articles.push(t) //this serve ad ottenere l'oggetto che sta eseguendo il codice corrente
      //push aggiunge un elemento al vettore
    }

    console.log(this.articles);
    return false;
  }



}
