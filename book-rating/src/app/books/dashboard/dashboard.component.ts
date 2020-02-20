import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { Store, select } from '@ngrx/store';
import { loadBooks } from '../store/book.actions';
import { selectBooks, selectBooksLoading, bookWithIsbn } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // Achtung Bug!
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books$ = this.store.pipe(select(selectBooks));
  loading$ = this.store.pipe(select(selectBooksLoading));

  // with given id
  book1$ = this.store.pipe(select(bookWithIsbn, { isbn: 1 }));


  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(loadBooks());
  }

  doRateDown(book: Book) {
    // const ratedBook = this.br.rateDown(book);
    // this.update(ratedBook);
  }

  doRateUp(book: Book) {
    // const ratedBook = this.br.rateUp(book);
    // // const ratedBook = {
    // //   ...book,
    // //   rating: book.rating < 5 ? ++book.rating : 5
    // // };
    // this.update(ratedBook);
  }

  private update(ratedBook: Book) {
    // this.books = this.books
    //   .map(book => book.isbn === ratedBook.isbn ? ratedBook : book)
    //   .sort((a, b) => b.rating - a.rating);
  }

  doCreate(newBook: Book) {
    // this.books = [...this.books, newBook];
  }
}
