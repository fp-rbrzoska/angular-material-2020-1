import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksService } from './books.service';
import { BookListComponent } from './book-list/book-list.component';


@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  providers: [BooksService]
})
export class BooksModule { }
