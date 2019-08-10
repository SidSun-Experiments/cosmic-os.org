import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  retrievedDATA: {
    responseJSON: {
      head: {
        brandingText: string,
        text: string
      },
      body: {
        keyFeatures: {
          title: string,
          text: string
        }[],
        features: {
          title: string,
          featureList: string[],
        }[]
      }
    }
  };
  constructor() { }

  ngOnInit() {
    this.retrievedDATA = $.getJSON('https://cdn.sidsun.com/cos/features.json', (data) => {
      console.log(data);
      return data;
    });
  }

}
