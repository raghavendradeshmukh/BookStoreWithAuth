import { createAction, props } from "@ngrx/store";
import { UserState } from "./auth.model";
import { Book } from "src/app/books/store/book.model";

export const loginAction = createAction(
    "[Login Component] Login Action",
    props<{ user: UserState }>()
);

export const logutAction = createAction(
    "[App Component] Logout Action"
);