import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;
  constructor(private bookService: BooksService) {
    this.bookService.getBooks().subscribe()
    this.books$ = this.bookService.getBooks();
   }

  ngOnInit(): void {
  }

}
