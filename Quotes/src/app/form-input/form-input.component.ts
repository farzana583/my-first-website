import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {


  
  newQuote = new Quote("", "", "", "", new Date())
  @Output() emitNewQuote = new EventEmitter<Quote>();

  
  submitQuote(){
    this.emitNewQuote.emit(this.newQuote);
    this.newQuote = new Quote("", "", "", "", new Date())
  }

   
 

  constructor() { }

  ngOnInit(): void {
  }
  
}