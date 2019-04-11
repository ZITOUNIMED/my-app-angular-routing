import {NgModule} from "@angular/core";
import {A3Module} from "./a3.module";
import {A3RoutingModule} from "./a3.routing.module";

@NgModule({
  imports: [A3Module, A3RoutingModule]
})
export class A3RoutedModule {}
