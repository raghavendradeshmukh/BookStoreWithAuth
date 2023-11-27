import { createReducer, on } from "@ngrx/store";
import { clearBookAction, deleteBookActionSuccess, getAllBooksActionSuccess, saveBookActionSuccess, updateBookActionSuccess } from "./books.action";
import { Book } from "./book.model";


export const initialBookState: Book[] = [];

export const BooksReducer = createReducer(
    initialBookState,
    on(getAllBooksActionSuccess, (state, action) => {
        let books = action.books;
        return books;
    }),
    on(saveBookActionSuccess, (state, action) => {
        let newState = [...state];
        newState.unshift(action.book);
        return newState;
    }),
    on(updateBookActionSuccess, (state, { book }) => {
        let filteredState = state.filter(resp => resp.id !== book.id);
        filteredState.unshift(book);
        return filteredState;
    }),
    on(deleteBookActionSuccess, (state, { id }) => {
        let filteredState = state.filter(resp => resp.id !== id);
        return filteredState;
    }),
    on(clearBookAction, (state, action) => {
        console.log("state before", state);
        console.log("action", action);
        state = [...initialBookState];
        console.log("state after", state);
        return state;
    }),
);