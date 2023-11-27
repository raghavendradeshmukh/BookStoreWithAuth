import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, tap } from "rxjs";
import { UserState } from "./auth.model";
import { Store, select } from "@ngrx/store";
import { loginAction } from "./auth.action";
import { logInUserSelector } from "./auth.selector";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private store: Store<UserState>,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {

        return this.store.pipe(
            select(logInUserSelector),
            tap(logIn => {
                if (!logIn) {
                    this.router.navigate(['/']);
                }
            })
        )
    }
}