import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[]=[
    new Quote("When you decide to start the journey,the way will appear",0,0,"anonymous","mercy", new Date(2022,4,11)),
    new Quote("Day 1 or one day, you decide",0,0,"budhaa","murigi",new Date(2022,4,11) ),
    new Quote("Invest in yourself, you are the only guarantee in this life",0,0,"twitter","malvis", new Date(2022,4,11))
  ]
  addNewQuote(quote){
    let myquotes = quote.quote
    let author = quote.author
    let person = quote.name
    this.quotes.push(new Quote(myquotes, 0, 0,author, person, new Date()));

  }


  toggleDetails(index: number){
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  }
  quoteDelete(index:any){
    let confirmDelete = confirm('Are you sure you want to delete this quote');
    if(confirmDelete){
       this.quotes.splice(index,1)
    }
      
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
