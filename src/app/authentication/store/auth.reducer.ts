import { createReducer, on } from "@ngrx/store";
import { UserState } from "./auth.model";
import { loginAction, logutAction } from "./auth.action";

export const initialAuthState: UserState = {
    id: 0,
    emailID: '',
    password: ''
};

export const AuthReducer = createReducer(
    initialAuthState,
    on(loginAction, (state, { user }) => {
        return user;
    }),
    on(logutAction, (state, action) => {
        state = { ...initialAuthState };
        return state;
    })
);