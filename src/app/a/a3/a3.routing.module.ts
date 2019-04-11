import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {A3Component} from "./a3.component";
import {A31Component} from "./a31/a31.component";
import {A32Component} from "./a32/a32.component";
import {A33Component} from "./a33/a33.component";

const routes = [
  { path: '', component: A3Component},
  { path: 'a31', component: A31Component, outlet: 'second'},
  { path: 'a32', component: A32Component, outlet: 'second'},
  { path: 'a33', component: A33Component, outlet: 'second'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class A3RoutingModule {}
