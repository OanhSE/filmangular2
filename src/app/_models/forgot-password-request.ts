/*Forgot password request model*/
export class ForgotPasswordRequest {
  email: string;
}

/*Reset password request model*/
export class ResetPasswordRequest{
  pwd: string;
  token: string;
  constructor(){

  }

}
