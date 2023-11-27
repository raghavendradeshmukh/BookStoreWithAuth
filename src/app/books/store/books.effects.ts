import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Book } from "./book.model";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { clearBookAction, deleteBookAction, deleteBookActionSuccess, getAllBooksAction, getAllBooksActionSuccess, saveBookAction, saveBookActionSuccess, updateBookAction, updateBookActionSuccess } from "./books.action";
import { map, switchMap, tap, withLatestFrom } from "rxjs";
import { BooksService } from "./books.service";
import { bookSelector } from "./books.selector";

@Injectable()
export class BooksEffects {

    constructor(
        private store: Store<Book>,
        private action$: Actions,
        private booksService: BooksService
    ) { }

    getAllBooksEffect = createEffect(() =>
        this.action$.pipe(
            ofType(getAllBooksAction),
            withLatestFrom(this.store.pipe(select(bookSelector))),
            switchMap(action => {
                return this.booksService
                    .getAllBooks()
                    .pipe(map((data: any) =>
                        getAllBooksActionSuccess({ books: data })
                    ));
            })
        )
    );

    saveBookEffect = createEffect(() =>
        this.action$.pipe(
            ofType(saveBookAction),
            switchMap((action: any) => {
                return this.booksService
                    .saveBook(action.book)
                    .pipe(map((data: any) =>
                        saveBookActionSuccess({ book: data })
                    ));
            })
        )
    );

    updateBookEffect = createEffect(() =>
        this.action$.pipe(
            ofType(updateBookAction),
            switchMap((action: any) => {
                return this.booksService.
                    updateBook(action.book)
                    .pipe(map((data: any) =>
                        updateBookActionSuccess({ book: data })
                    ));
            })
        )
    );

    clearBookEffect = createEffect(() =>
        this.action$.pipe(
            ofType(clearBookAction)
        ), { dispatch: false }
    );

    deleteBookEffect = createEffect(() =>
        this.action$.pipe(
            ofType(deleteBookAction),
            switchMap((action: any) => {
                return this.booksService.
                    deleteBook(action.id)
                    .pipe(map((data: any) =>
                        deleteBookActionSuccess({ id: action.id })
                    ));
            })
        )
    );


}
