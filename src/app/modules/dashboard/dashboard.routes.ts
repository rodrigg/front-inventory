import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CategoryComponent } from "../category/components/category/category.component";

export const childRoutesDashboarRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "category", component: CategoryComponent },
];

export default childRoutesDashboarRoutes;
