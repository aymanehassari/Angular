import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addEmail(destinatario: HTMLInputElement, oggetto: HTMLInputElement, testo: HTMLInputElement): boolean {
    console.log(`Adding article title: ${destinatario.value} and link: ${oggetto.value} and testo: ${testo.value}`);
  return false;
  }
}

