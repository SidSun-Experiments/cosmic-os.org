import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: { responseJSON: { name: string, description: string, developmentTools: { name: string, href: string }[], deploymentTools: { name: string, href: string }[] }[] };
  constructor() { }

  ngOnInit() {
    this.projects = $.getJSON('https://eowyn.strangebits.co.in/projects.json', (data) => {
      return data;
    });
    $(document).ready(() => {
      $('.skillDiv').hover(function () {
          $(this).addClass('shadow');
        },
        function() {
          $(this).removeClass('shadow');
        });
    });
  }

}
