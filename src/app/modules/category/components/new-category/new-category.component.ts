import { Component, inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
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

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
    });
  }
  onCancel() {
    this.dialogRef.close(3);
  }
  onSave() {
    let data = {
      name: this.categoryForm.get("name")?.value,
      description: this.categoryForm.get("description")?.value,
    };
    this.categoryService.saveCateries(data).subscribe(
      (response) => {
        this.dialogRef.close(1);
        console.log(response);
      },
      (error) => {
        this.dialogRef.close(2);
      }
    );
  }
}
