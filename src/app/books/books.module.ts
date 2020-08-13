import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksService } from './books.service';
import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookDetailDialogComponent } from './book-detail-dialog/book-detail-dialog.component';



@NgModule({
  declarations: [BookListComponent, BookDetailDialogComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ],
  providers: [BooksService]
})
export class BooksModule { }
