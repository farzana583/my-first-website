import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent implements OnInit {
  quotes:Quote[] = [
    new Quote('Farzana ','Education', ' “If You are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people” – Chinese Proverb', 'King David', new Date(2020, 11, 8)),
    new Quote('Fartun','Education', 'The cure for boredom is curiosity. There is no cure for curiosity” – ', 'Dorothy Parker', new Date(2020, 12, 12)),
  ] 
  i: number;
  constructor() { }

  ngOnInit(): void {
  } 
  thumbsup(i) { 
    this.quotes[i].thumbsup++
  }
  thumbsdown(i) {
    this.quotes[i].thumbsdown++
  }
  saveQuote(newQuote) {
    this.quotes.unshift(newQuote);
  }
  delete(i){ 
    this.quotes.splice(i, 1);
  }
}      