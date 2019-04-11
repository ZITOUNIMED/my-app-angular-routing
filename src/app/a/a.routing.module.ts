import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {A1Component} from "./a1/a1.component";
import {AComponent} from "./a.component";

const routes = [
  {
    path: 'a',
    children: [
      { path: '', component: AComponent},
      { path: 'a1', component: A1Component},
      { path: 'a2', loadChildren: './a2/a2.routed.module#A2RoutedModule'},
      { path: 'a3', loadChildren: './a3/a3.routed.module#A3RoutedModule'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ARoutingModule{}
