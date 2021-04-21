import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ManageClientComponent } from '../manage-client.component';
import { Router, ActivatedRoute } from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { FilmService } from './../../../../_service/film.service';
import { UserService } from './../../../../_service/user.service';
import {User} from './../../../../_models/user';
import { AlertService } from './../../../../_service/alert.service';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})


export class AddClientComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  dateCurrent = new Date();
  date = false;
  isShowErrorDate = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private filmService: FilmService,
    private userService: UserService,
    private alertService: AlertService,
    public dialogRef: MatDialogRef<AddClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }




  ngOnInit(): void {
    this.form = this.formBuilder.group({

      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]{10}')]],
      dayOfBirth: ['', Validators.required],
      sex: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f(): {[p: string]: AbstractControl} {
    return this.form.controls;
  }
  checkDate(): void{

    const birthday = new Date(this.form.get('dayOfBirth').value);
    console.log(birthday);

    const now = new Date();
    const currentYear = now.getFullYear();
    const yearDiff = currentYear - birthday.getFullYear();
    const birthdayThisYear = new Date(currentYear, birthday.getMonth(), birthday.getDate());
    const hasHadBirthdayThisYear = (now >= birthdayThisYear);

    const age = hasHadBirthdayThisYear
      ? yearDiff
      : yearDiff - 1;

    if (age < 18){
      this.isShowErrorDate = true;
    }
    else{
      this.isShowErrorDate = false;
    }

    console.log(age);
    console.log(this.isShowErrorDate);

  }

  onSubmit(): void {

    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.userService.register(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.submitted = true;
          this.dialogRef.close();
          this.alertService.success('Thêm thành công')
        },
        error: error => {
          this.submitted = false;
          this.loading = false;
          this.alertService.error('Thêm thất bại')
        }
      });
  }


}
