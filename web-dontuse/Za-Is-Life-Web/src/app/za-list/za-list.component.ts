import { Component, OnInit } from '@angular/core';
declare var tableTopWrapper: any;

@Component({
  selector: 'app-za-list',
  templateUrl: './za-list.component.html',
  styleUrls: ['./za-list.component.css']
})
export class ZaListComponent implements OnInit {
  
  hero = 'Windstorm';

  constructor() { 
    const publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/1o5rqwDvo2Q3-68HTWGC-RMFOx84YRQEBJbvZp-PXRnQ/edit?ts=5ac950e7";
    tableTopWrapper.init(publicSpreadsheetUrl);
    // Tabletop.init( { key: publicSpreadsheetUrl,
    //   callback: this.showInfo,
    //   simpleSheet: true } );
  }

  ngOnInit() {
    // const publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/1o5rqwDvo2Q3-68HTWGC-RMFOx84YRQEBJbvZp-PXRnQ/edit?ts=5ac950e7";
    // tableTopWrapper.init(publicSpreadsheetUrl);
  }

  

  showInfo(): void {
      console.log("hello");
  }

}
