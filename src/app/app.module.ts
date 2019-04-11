import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import {AppRoutingModule} from "./app.routing.module";
import { A1Component } from './a/a1/a1.component';
import { A2Component } from './a/a2/a2.component';
import { A3Component } from './a/a3/a3.component';
import { A21Component } from './a/a2/a21/a21.component';
import { A22Component } from './a/a2/a22/a22.component';
import { A23Component } from './a/a2/a23/a23.component';
import {AModule} from "./a/a.module";

@NgModule({
  declarations: [
    AppComponent,
    BComponent,
    CComponent,
  ],
  imports: [
    BrowserModule,
    AModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
