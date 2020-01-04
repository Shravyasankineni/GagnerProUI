import { Component, OnInit } from '@angular/core';
import { Login } from './Login';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {
  login: Login = new Login('', 0, '', '', '');
  message: any;

  constructor(private service: UserRegistrationService) { }

  ngOnInit() {
  }

  public loginRegisterNow() {
    console.log('button worked');
    const resp = this.service.doLoginRegistration(this.login);
    resp.subscribe ((data) => this.message = data);
  }

   public loginNow() {
    console.log('button worked');
    const resp = this.service.doLogin(this.login);
    resp.subscribe ((data) => this.message = data);
  }

}
