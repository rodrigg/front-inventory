import { Component } from "@angular/core";
import { SidenavComponent } from "../../shared/components/sidenav/sidenav.component";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
})
export class DashboardComponent {}
