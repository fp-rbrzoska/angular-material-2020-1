import { Component, OnInit, Inject } from '@angular/core';
import { Book } from 'src/app/models/book';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-book-detail-dialog',
  templateUrl: './book-detail-dialog.component.html',
  styleUrls: ['./book-detail-dialog.component.scss']
})
export class BookDetailDialogComponent implements OnInit {

  openedBook: Book;
  constructor(public dialogRef: MatDialogRef<BookDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book) {
      this.openedBook = data;
    }

  ngOnInit(): void {
  }

  closeBookDetails() {
    this.dialogRef.close();
  }

}
