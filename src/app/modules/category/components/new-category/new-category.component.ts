import { Component, inject, OnInit } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";
import { MaterialModule } from "../../../shared/material.module";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CategoryService } from "../../../shared/services/category.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DialogRef } from "@angular/cdk/dialog";

@Component({
  selector: "app-new-category",
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, FormsModule],
  templateUrl: "./new-category.component.html",
  providers: [CategoryService],
  styleUrl: "./new-category.component.css",
})
export class NewCategoryComponent implements OnInit {
  public categoryForm!: FormGroup;
  private fb = inject(FormBuilder);
  private categoryService = inject(CategoryService);
  private dialogRef = inject(MatDialogRef<NewCategoryComponent>);
  private data = inject(MAT_DIALOG_DATA);

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
    });
    if (this.data != null) {
      this.updateForm(this.data);
    }
  }
  onCancel() {
    this.dialogRef.close(3);
  }

  updateCategories() {
    this.dialogRef.close(3);
  }

  onSave() {
    let data = {
      name: this.categoryForm.get("name")?.value,
      description: this.categoryForm.get("description")?.value,
    };
    if (this.data != null) {
      this.categoryService.updateCategories(data, this.data.id).subscribe(
        (response) => {
          this.dialogRef.close(1);
          console.log(response);
        },
        (error) => {
          this.dialogRef.close(2);
        }
      );
    } else {
      this.categoryService.saveCateries(data).subscribe(
        (response) => {
          this.dialogRef.close(1);
        },
        (error) => {
          this.dialogRef.close(2);
        }
      );
    }
  }

  updateForm(data: any) {
    this.categoryForm = this.fb.group({
      name: [data.name, Validators.required],
      description: [data.description, Validators.required],
    });
  }
}
