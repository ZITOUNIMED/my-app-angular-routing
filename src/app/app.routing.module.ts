import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BComponent} from "./b/b.component";
import {CComponent} from "./c/c.component";
import {ARoutingModule} from "./a/a.routing.module";

const appRoutes = [
  { path: 'b', component: BComponent},
  { path: 'c', component: CComponent},
  { path: '', redirectTo: '/c', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    ARoutingModule],
  exports:[RouterModule]
})
export class AppRoutingModule{}
