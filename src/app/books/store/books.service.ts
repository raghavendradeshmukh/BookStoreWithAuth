import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<Book[]>("http://localhost:3000/books");
  }

  saveBook(book: Book) {
    return this.http.post<Book>("http://localhost:3000/books", book);
  }

  updateBook(book: Book) {
    return this.http.put<Book>(`http://localhost:3000/books/${book.id}`, book);
  }

  deleteBook(id: number) {
    return this.http.delete(`http://localhost:3000/books/${id}`);
  }
}
