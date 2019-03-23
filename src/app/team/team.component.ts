import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  retrievedDATA: {
    responseJSON: {
      head: {
        catchyText: string,
        fancyText: string
      },
      body: {
        headingName: string,
        people: {
          imageLInk: string,
          routeName: string,
          name: string,
          role: string,
        }[]
      }[]
    }
  };

  constructor() { }

  ngOnInit() {
    this.retrievedDATA = $.getJSON('https://cdn.sidsun.com/cos/team.json', (data) => {
      return data;
    });
  }

}
