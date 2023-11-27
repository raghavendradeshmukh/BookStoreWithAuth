import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginAction, logutAction } from "./auth.action";
import { AuthService } from "./auth.service";
import { map, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }

    loginEffect = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction),
            switchMap(action => {
                return this.authService.loginUser(action.user)
                    .pipe(map((data) => {
                        sessionStorage.setItem('user', JSON.stringify(action.user));
                        this.router.navigate(['/books']);
                    }))

            })
        ), { dispatch: false }
    );

    logOutEffect = createEffect(() =>
        this.actions$.pipe(
            ofType(logutAction),
            tap(user => {
                sessionStorage.removeItem('user');
                this.router.navigate(['/']);
            })
        ), { dispatch: false }
    );
}   