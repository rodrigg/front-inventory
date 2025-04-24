import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./pages/dashboard.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { SidenavComponent } from "../shared/components/sidenav/sidenav.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, SharedModule, FlexLayoutModule],
  exports: [],
})
export class DashboardModule {}
