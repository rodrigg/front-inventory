import { Routes } from "@angular/router";
import { DashboardComponent } from "./modules/dashboard/pages/dashboard.component";

export const routes: Routes = [
  {
    component: DashboardComponent,
    path: "dashboard",
    loadChildren: () => import("./modules/dashboard/dashboard.routes"),
  },
  {
    component: DashboardComponent,
    path: "",
    loadChildren: () => import("./modules/dashboard/dashboard.routes"),
  },
];
