import { Component, OnInit } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	onSignIn: any;

  constructor() { }

  ngOnInit() {
  }

  

}
