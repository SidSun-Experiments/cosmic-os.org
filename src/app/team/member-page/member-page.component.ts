import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
declare var $:any;

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.css']
})
export class MemberPageComponent implements OnInit {
  splitURL: string[];
  routingName: string;
  jsonURL: string;
  person: {
    responseJSON: {
      name:string,
      img: string,
      role:string,
      quote:string,
      socials: {
        name: string,
        icon: string,
        href: string
      }[]
    }
  };
  constructor(
    private router: Router,
  ) { }

  ngOnInit( ) {
    this.splitURL = this.router.url.split('/');
    this.routingName  = this.splitURL[2];
    this.jsonURL = 'https://cdn.sidsun.com/cos/' + this.routingName + '.json';
    this.person = $.getJSON(this.jsonURL, (data) => {
      return data;
    });
    console.log(this.person);
  }

}
