import { Component, OnInit, Input } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-email',
  templateUrl: './sent-email.component.html',
  styleUrls: ['./sent-email.component.css']
})
export class SentEmailComponent implements OnInit {
@Input() email: Email //email nome della variable ed Email è la classe in input;
  constructor() { }

  ngOnInit(): void {
  }

}
