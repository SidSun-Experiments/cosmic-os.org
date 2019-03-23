import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  retrievedDATA: {
    responseJSON: {
      jumbotron: {
        brandingText: string
      },
      divisions: {
        title: string,
        text: string
      }[],
      keyFeatures: {
        title: string,
        text: string
      }[],
    }
  };
  constructor() {
  }

  ngOnInit() {
    this.retrievedDATA = $.getJSON('https://cdn.sidsun.com/cos/home.json', (data) => {
      return data;
    });
  }
}
