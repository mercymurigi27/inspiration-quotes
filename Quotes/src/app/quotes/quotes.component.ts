import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[]=[
    new Quote("When you decide to start the journey,the way will appear",0,0,"anonymous","mercy"),
    new Quote("Day 1 or one day, you decide",0,0,"budhaa","murigi"),
    new Quote("Invest in yourself, you are the only guarantee in this life",0,0,"twitter","malvis")
  ]
  addNewQuote(quote){
    let myquotes = quote.quote
    let author = quote.author
    let person = quote.name
    this.quotes.push(new Quote(myquotes, 0, 0,author, person));

  }


  toggleDetails(index: number){
    this.quotes[index].showDescription= this.quotes[index].showDescription;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
