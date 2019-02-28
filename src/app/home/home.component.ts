import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: { responseJSON: { objective: string } };
  quote: { responseJSON: { quotes: string[] } };
  random: number;

  constructor() {
  }

  ngOnInit() {
    this.data = $.getJSON('https://eowyn.strangebits.co.in/objective.json', (data) => {
      return data;
    });
    this.quote = $.getJSON('https://eowyn.strangebits.co.in/quotes.json', (data) => {
      this.random = getRandomNumber(0, parseInt(data.quotes.length, 10));
      return data;
    });
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
}
