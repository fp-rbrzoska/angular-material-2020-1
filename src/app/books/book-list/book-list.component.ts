import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { BooksService } from '../books.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookDetailDialogComponent } from '../book-detail-dialog/book-detail-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @ViewChild('bookDetailsDialog') bookDetailsTemplate: TemplateRef<any>;
  openedBook: Book;
  books$: Observable<Book[]>;
  dialogRef: MatDialogRef<any>;
  constructor(private bookService: BooksService, private dialog: MatDialog, private clipboard: Clipboard) {
    this.books$ = this.bookService.getBooks();
   }

  ngOnInit(): void {
  }

  openBookDetails(id) {
    this.bookService.getBookById(id).subscribe( data => {
      this.openedBook = data;
      // otwieranie modala opartego o szablon <ng-template bookDetailsDialog>
      // this.dialogRef =  this.dialog.open(this.bookDetailsTemplate);

      this.dialog.open(BookDetailDialogComponent, { data });
    });
  }

  closeBookDetails() {
    this.dialogRef.close();
    this.openedBook = null;
  }

  copyDescription(descr) {
    this.clipboard.copy(descr);
  }

}
