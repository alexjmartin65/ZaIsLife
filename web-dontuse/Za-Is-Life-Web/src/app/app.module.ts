import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ZaListComponent } from './za-list/za-list.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

 import "../assets/table-top/tabletop.min.js";
 import "../assets/table-top/tableTopWrapper.js";
declare const Tabletop: any;

@NgModule({
  declarations: [
    AppComponent,
    ZaListComponent
  ],
  imports: [
    NgbModule.forRoot(),
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
