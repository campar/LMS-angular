import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  error = '';
  type = 'password';
  show = false;

  private LMSLOGO = require('../../assets/images/LMS-logo.png');

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['/']);
      },
      error => {
        this.error = error;
      });
    }

    toggleShow() {
        this.show = !this.show;
        if (this.show) {
            this.type = 'text';
        } else {
            this.type = 'password';
        }
    }
  }
