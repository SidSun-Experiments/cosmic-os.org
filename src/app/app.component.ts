import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
    $(document).ready(function () {
      console.log('Ready!');
      $('.navber-button').on('click', function () {
        $('.navbar-icon').toggleClass('open');
      });
    });
  }
}
