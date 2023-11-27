import { Component } from '@angular/core';
import { Book } from '../store/book.model';
import { Store, select } from '@ngrx/store';
import { bookSelector } from '../store/books.selector';
import { deleteBookAction, getAllBooksAction, saveBookAction, updateBookAction } from '../store/books.action';

declare var window: any;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  addModal: any;
  deleteModal: any;

  deleteID: number = 0;
  bookForm: Book = {
    id: 0,
    author: '',
    title: '',
    cost: 0
  }
  isUpdateOperation: boolean = false;
  books$: any = this.store.pipe(select(bookSelector));

  constructor(
    private store: Store<Book>
  ) { }

  ngOnInit() {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );

    this.addModal = new window.bootstrap.Modal(
      document.getElementById("addModal")
    );
    this.store.dispatch(getAllBooksAction());
  }

  openAddModal() {
    this.isUpdateOperation = false;
    this.addModal.show();
  }

  saveBook() {
    if (this.bookForm.author) {
      this.store.dispatch(saveBookAction({ book: this.bookForm }));
      this.bookForm = {
        id: 0,
        author: '',
        title: '',
        cost: 0
      };
      this.isUpdateOperation = false;
      this.addModal.hide();
    }
  }

  openUpdateModel(book: Book) {
    this.bookForm = { ...book };
    this.isUpdateOperation = true;
    this.addModal.show();
  }

  updateBook() {
    if (this.bookForm.author) {
      this.store.dispatch(updateBookAction({ book: this.bookForm }));
      this.bookForm = {
        id: 0,
        author: '',
        title: '',
        cost: 0
      };
      this.addModal.hide();
      this.isUpdateOperation = false;
    }
  }

  openDeleteModel(book: Book) {
    this.bookForm = { ...book };
    this.deleteModal.show();
  }

  confirmDelete() {
    this.store.dispatch(deleteBookAction({ id: this.bookForm.id }));
    // this.store.dispatch(getAllBooksAction());
    this.bookForm = {
      id: 0,
      author: '',
      title: '',
      cost: 0
    };
    this.deleteModal.hide();
  }
}
