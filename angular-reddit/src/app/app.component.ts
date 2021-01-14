import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   addArticle(spamText: HTMLInputElement, num: HTMLInputElement): boolean {
    let t = spamText.value;
    let v= num.value;
    console.log(`spamText: ${spamText.value} and spamNum: ${num.value}`);
    return false;
    

  }
}
