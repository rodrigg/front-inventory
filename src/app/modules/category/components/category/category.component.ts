import { Component, inject, OnInit, ViewChild } from "@angular/core";
import { CategoryService } from "../../../shared/services/category.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "../../../shared/material.module";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { NewCategoryComponent } from "../new-category/new-category.component";
import { CommonModule } from "@angular/common";
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from "@angular/material/snack-bar";
import { ConfirmComponent } from "../../../shared/components/confirm/confirm.component";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-category",
  standalone: true,
  imports: [HttpClientModule, MaterialModule, CommonModule],
  providers: [CategoryService, HttpClient],
  templateUrl: "./category.component.html",
  styleUrl: "./category.component.css",
})
export class CategoryComponent implements OnInit {
  private categoryService = inject(CategoryService);
  public dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  @ViewChild(MatPaginator)
  private paginator!: MatPaginator;
  ngOnInit(): void {
    this.getCategories();
  }

  displayedColumns: string[] = ["id", "name", "description", "actions"];
  dataSource = new MatTableDataSource<CategoryElement>();
  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        this.processCategoryResponse(data);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }
  processCategoryResponse(resp: any) {
    const dataCategory: CategoryElement[] = [];
    if (resp.metadata[0].code === "00") {
      let listCategory = resp.categoryResponse.category;
      listCategory.forEach((element: CategoryElement) => {
        dataCategory.push(element);
      });
      this.dataSource = new MatTableDataSource(dataCategory);
      this.dataSource.paginator = this.paginator;
    }
  }

  openCategoryDialog() {
    const dialogRef = this.dialog.open(NewCategoryComponent, {
      width: "280px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.openSnackBar("Categoria Agregada", "Exitosa");
        this.getCategories();
      } else if (result === 2) {
        this.openSnackBar("Se produjo un error al guardar categoria", "Error");
      }
    });
  }
  openSnackBar(
    messeage: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(messeage, action, { duration: 2000 });
  }
  edit(id: any, name: any, description: any) {
    const dialogRef = this.dialog.open(NewCategoryComponent, {
      data: { id, name, description },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.openSnackBar("Categoria actualizada", "Exitosa");
        this.getCategories();
      } else if (result === 2) {
        this.openSnackBar(
          "Se produjo un error al actualizar categoria",
          "Error"
        );
      }
    });
  }
  deleteCategory(id: any) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: { id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.openSnackBar("Categoria actualizada", "Exitosa");
        this.getCategories();
      } else if (result === 2) {
        this.openSnackBar(
          "Se produjo un error al actualizar categoria",
          "Error"
        );
      }
    });
  }
  buscar(termino: string) {
    if (termino.length !== 0) {
      this.categoryService.getCategoriesByiD(termino).subscribe(
        (data: any) => {
          this.processCategoryResponse(data);
        },
        (erro: any) => {
          console.log("error", erro);
        }
      );
    }
  }
}

interface CategoryElement {
  description: string;
  id: number;
  name: string;
}
