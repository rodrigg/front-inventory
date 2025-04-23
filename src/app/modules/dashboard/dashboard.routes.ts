import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

export const childRoutesDashboarRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
];

export default childRoutesDashboarRoutes;
