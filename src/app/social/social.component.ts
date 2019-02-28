import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  socials: { responseJSON: { name: string, href: string, icon: string}[] };
  constructor() { }

  ngOnInit() {
    this.socials = $.getJSON('https://eowyn.strangebits.co.in/social.json', (data) => {
      return data;
    });
    $(document).ready(() => {
      $('.skillDiv').hover(function () {
          $(this).addClass('shadow');
        },
        function() {
          $(this).removeClass('shadow');
        });
    });  }
}
