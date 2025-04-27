import { Component, inject } from "@angular/core";
import { CategoryService } from "../../services/category.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MaterialModule } from "../../material.module";

@Component({
  selector: "app-confirm",
  standalone: true,
  imports: [MaterialModule],
  providers: [CategoryService],
  templateUrl: "./confirm.component.html",
  styleUrl: "./confirm.component.css",
})
export class ConfirmComponent {
  private categoryService = inject(CategoryService);
  private dialogRef = inject(MatDialogRef);
  public data = inject(MAT_DIALOG_DATA);
  onConfirm() {
    if (this.data != null) {
      this.categoryService.deleteCategories(this.data.id).subscribe(
        (data) => {
          this.dialogRef.close(1);
        },
        (error) => {
          this.dialogRef.close(2);
        }
      );
    } else {
      this.dialogRef.close(2);
    }
  }
  onNoClick() {
    this.dialogRef.close(3);
  }
}
