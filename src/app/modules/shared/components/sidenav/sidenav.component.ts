import { Component, OnInit } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { MaterialModule } from "../../material.module";
import { MediaMatcher } from "@angular/cdk/layout";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-sidenav",
  standalone: true,
  imports: [RouterModule, MaterialModule, CommonModule],
  templateUrl: "./sidenav.component.html",
  styleUrl: "./sidenav.component.css",
})
export class SidenavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  menuNav = [
    { name: "Home", route: "home", icon: "home" },
    { name: "Categorias", route: "home", icon: "category" },
    { name: "Productos", route: "product", icon: "production_quantity_limits" },
  ];
  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width:600px)");
  }
  shouldRun = true;
  ngOnInit(): void {}
}
