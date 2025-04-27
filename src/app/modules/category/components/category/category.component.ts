import { Component, inject, OnInit } from "@angular/core";
import { CategoryService } from "../../../shared/services/category.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "../../../shared/material.module";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-category",
  standalone: true,
  imports: [HttpClientModule, MaterialModule],
  providers: [CategoryService, HttpClient],
  templateUrl: "./category.component.html",
  styleUrl: "./category.component.css",
})
export class CategoryComponent implements OnInit {
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        console.log("respuesta categories", data);
        this.processCategoryResponse(data);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }
  constructor(private categoryService: CategoryService) {}

  displayedColumns: string[] = ["id", "name", "description", "actions"];
  dataSource = new MatTableDataSource<CategoryElement>();
  getCategories(): void {}
  processCategoryResponse(resp: any) {
    const dataCategory: CategoryElement[] = [];
    if (resp.metadata[0].code === "00") {
      let listCategory = resp.categoryResponse.category;
      listCategory.forEach((element: CategoryElement) => {
        dataCategory.push(element);
      });
      this.dataSource = new MatTableDataSource(dataCategory);
    }
  }
}

interface CategoryElement {
  description: string;
  id: number;
  name: string;
}
