import { createAction, props } from "@ngrx/store";
import { Book } from "./book.model";

export const getAllBooksAction = createAction(
    "[Books Component] Get All Books"
);

export const getAllBooksActionSuccess = createAction(
    "[Books Component] Get All Books Success",
    props<{ books: Book[] }>()
);

export const saveBookAction = createAction(
    "[Books Component] Save Book",
    props<{ book: Book }>()
);

export const saveBookActionSuccess = createAction(
    "[Books Component] Save Book Success",
    props<{ book: Book }>()
);

export const updateBookAction = createAction(
    "[Books Component] Update Book",
    props<{ book: Book }>()
);

export const updateBookActionSuccess = createAction(
    "[Books Component] Update Book Success",
    props<{ book: Book }>()
);

export const deleteBookAction = createAction(
    "[Books Component] Delete Book",
    props<{ id: number }>()
);

export const deleteBookActionSuccess = createAction(
    "[Books Component] Delete Book Success",
    props<{ id: number }>()
);

export const clearBookAction = createAction(
    '[App Component] Clear Book State'
);