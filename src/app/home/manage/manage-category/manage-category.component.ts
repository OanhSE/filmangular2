import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/User';
import { UserService } from './../../../_service/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddCategoryComponent } from './add-category/add-category.component'
import { MatFormFieldControl, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { first } from 'rxjs/operators';
import { AlertService } from './../../../_service/alert.service';
import { Route, Router } from '@angular/router';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css'],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MatFormFieldControl, useExisting: ManageCategoryComponent}
  ]
})
export class ManageCategoryComponent implements OnInit {

  categrories: Category[] ;
  animal: string;
  name: string;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private  alertService: AlertService,
    private  router: Router,

  ) { }

  ngOnInit(): void {


  }




}
