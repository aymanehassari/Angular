import { Component } from '@angular/core';
import { Email } from './email.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    emails: Email[] = new Array<Email>()
    addEmail(destinatario: HTMLInputElement, oggetto: HTMLInputElement, testo: HTMLInputElement): boolean {
        console.log(`Adding article title: ${destinatario.value} and link: ${oggetto.value} and testo: ${testo.value}`)
        this.emails.push(new Email(destinatario.value, oggetto.value, testo.value));
        return false; 
    }
}

//(app.component.html) e è la variabile mentre emails è il nome della variabile di input

