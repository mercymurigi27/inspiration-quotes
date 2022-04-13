import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  quote!: string;
 author!: string;
 person!: string;


  newQuote = new Quote("", 0, 0,"", "",new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitNewQuote(form){
    console.log(form.value)
    form.value.upvote = 0
    form.value.downvote = 0
    this.addQuote.emit(form.value)
    
    
  }
  constructor() { }
  
}


    


