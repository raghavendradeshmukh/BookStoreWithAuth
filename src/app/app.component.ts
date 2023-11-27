import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UserState } from './authentication/store/auth.model';
import { loginAction, logutAction } from './authentication/store/auth.action';
import { logInUserSelector, logOutUserSelector } from './authentication/store/auth.selector';
import { Book } from './books/store/book.model';
import { bookSelector } from './books/store/books.selector';
import { clearBookAction } from './books/store/books.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isUserLoggedIn$: any;
  isUserLoggedOut$: any;

  book$ = this.bookStore.pipe(select(bookSelector));
  
  constructor(
    private store: Store<UserState>,
    private bookStore: Store<Book>
  ) { }

  ngOnInit() {
    if ("user" in sessionStorage) {
      let userInfo = JSON.parse(sessionStorage.getItem('user') || '{}');
      this.store.dispatch(loginAction({ user: userInfo }));
    }
    this.isUserLoggedIn$ = this.store.pipe(select(logInUserSelector));
    this.isUserLoggedOut$ = this.store.pipe(select(logOutUserSelector));
  }

  logOut() {
    this.store.dispatch(logutAction());
    this.bookStore.dispatch(clearBookAction());
  }
}
