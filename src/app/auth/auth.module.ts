import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[LoginComponent, SignupComponent],
  declarations: [LoginComponent, SignupComponent],
  bootstrap: [LoginComponent]
})
export class AuthModule { }
