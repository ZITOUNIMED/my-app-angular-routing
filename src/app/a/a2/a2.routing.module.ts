import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {A2Component} from "./a2.component";
import {A21Component} from "./a21/a21.component";
import {A22Component} from "./a22/a22.component";
import {A23Component} from "./a23/a23.component";

const routes = [
  { path: '', component: A2Component},
  { path: 'a21', component: A21Component},
  { path: 'a22', component: A22Component},
  { path: 'a23', component: A23Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A2RoutingModule {}
