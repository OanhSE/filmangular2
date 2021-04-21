import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ForgotPasswordRequest} from '../../_models/forgot-password-request';
import {ForgotPasswordService} from '../../_service/forgot-password.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  request: ForgotPasswordRequest = new ForgotPasswordRequest();

  public forgotPassword: FormGroup;
  submitted = false;
  constructor(private forgotPasswordService: ForgotPasswordService) { }

  ngOnInit(): void {
    this.forgotPassword = new FormGroup({
      email: new FormControl(null, Validators.required)
    });
  }

  get f(): {[p: string]: AbstractControl} {
    return this.forgotPassword.controls;
  }

  // Forgot password api calling method
  sendEmail(): void{
    this.submitted = true;
    if (this.forgotPassword.invalid) {
      return;
    }
    this.request.email = this.forgotPassword.get('email').value;
    this.forgotPasswordService.forgotPassword(this.request)
      .subscribe((result: any) => {
        alert('Please check your email for reset password link');
      }, (error: any) => {
        console.log(error);
      });
  }

}
