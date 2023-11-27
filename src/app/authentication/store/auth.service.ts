import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserState } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(user: UserState) {
    return this.http.post<UserState>("http://localhost:3000/auth", user);
  }
}
