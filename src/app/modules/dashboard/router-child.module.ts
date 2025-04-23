import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { childRoutesDashboarRoutes } from "./dashboard.routes";

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(childRoutesDashboarRoutes)],
  exports: [RouterModule],
})
export class RouterChildModule {}
