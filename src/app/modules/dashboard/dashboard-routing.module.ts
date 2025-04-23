import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./pages/dashboard.component";

const childRoytes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    loadChildren: () =>
      import("./router-child.module").then((m) => m.RouterChildModule),
  },
];
@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class DashboarRoutingdModule {}
