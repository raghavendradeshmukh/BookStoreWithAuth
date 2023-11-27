import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BooksReducer } from './store/books.reducer';
import { BooksEffects } from './store/books.effects';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature("books", BooksReducer),
    EffectsModule.forFeature(BooksEffects)
  ]
})
export class BooksModule { }
