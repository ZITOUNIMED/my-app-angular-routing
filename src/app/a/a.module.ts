import {NgModule} from "@angular/core";
import {AComponent} from "./a.component";
import {A1Component} from "./a1/a1.component";
import {A3Component} from "./a3/a3.component";
import {A2Module} from "./a2/a2.module";
import {A3Module} from "./a3/a3.module";

@NgModule({
  imports: [A2Module, A3Module],
  declarations: [
    AComponent,
    A1Component,
  ]
})
export class AModule {}
