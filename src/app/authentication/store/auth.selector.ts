import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./auth.model";


export const userState = createFeatureSelector<UserState>("auth");


export const logInUserSelector = createSelector(
    userState,
    (resp) => !!resp.emailID
)

export const logOutUserSelector = createSelector(
    logInUserSelector,
    loggedIn => !loggedIn
);