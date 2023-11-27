import { Component } from '@angular/core';
import { UserState } from '../store/auth.model';
import { Store } from '@ngrx/store';
import { loginAction } from '../store/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userInfo: UserState = {
    id: 0,
    emailID: '',
    password: ''
  };

  constructor(
    private store: Store<UserState>
  ) { }

  saveUser() {
    if (this.userInfo.emailID !== '') {
      this.store.dispatch(loginAction({ user: this.userInfo }));
    }
  }
}
