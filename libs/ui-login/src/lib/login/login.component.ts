import { Component, OnInit } from '@angular/core';
import {
  NotificationsService,
  AuthService,
} from '@fantasy-busts-app/core-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@fantasy-busts-app/api-interfaces';

@Component({
  selector: 'fantasy-busts-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userInfo = { email: 'f@f.com', password: 'pass' };
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private notificationsservice: NotificationsService,
    private authservice: AuthService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  login() {
    const inputedUser: User = this.form.value;
    this.notificationsservice.notify('Invalid User');
    if (this.form.invalid) {
      return false;
    } else {
      if (
        inputedUser.email === this.userInfo.email &&
        inputedUser.password === this.userInfo.password
      ) {
        this.authservice.setToken(inputedUser.email);
        this.notificationsservice.notify('Successfully Logged In');
        this.router.navigate(['/busts']);
      }
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
}
