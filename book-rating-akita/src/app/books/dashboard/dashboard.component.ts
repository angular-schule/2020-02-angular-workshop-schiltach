import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';
import { BooksQuery } from '../state/books.query';
import { BooksService } from '../state/books.service';
import { NgEntityServiceLoader } from '@datorama/akita-ng-entity-service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books$ = this.booksQuery.selectAll();
  loading$ = this.loader.loadersFor('books').get$;

  constructor(
    private booksQuery: BooksQuery,
    private bookService: BooksService,
    private loader: NgEntityServiceLoader) { }

  ngOnInit() {
    this.bookService.get().subscribe();
  }

  rateUp(book: Book) {
    this.bookService.rateUp(book).subscribe();
  }

  rateDown(book: Book) {
    this.bookService.rateDown(book).subscribe();
  }
}
