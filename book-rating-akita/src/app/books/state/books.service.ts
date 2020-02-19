import { Injectable } from '@angular/core';
import { BooksStore, BooksState } from './books.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { Book } from '../shared/book';
import { tap } from 'rxjs/operators';

/**
 * By extending NgEntityService, we get a several built-in API calls
 * without the need to add them ourselves: get(), add(), update() and delete().
 */
@Injectable({ providedIn: 'root' })
export class BooksService extends NgEntityService<BooksState> {

  readonly minRating = 1;
  readonly maxRating = 5;

  constructor(protected store: BooksStore) {
    super(store);
  }

  rateUp(book: Book) {
    const rating = Math.min(book.rating + 1, this.maxRating);
    return this.rate(book, rating);
  }

  rateDown(book: Book) {
    const rating = Math.max(book.rating -1, this.minRating);
    return this.rate(book, rating);
  }

  private rate(book: Book, rating: number) {
    return this.getHttp()
      .post(this.api + `/${book.isbn}/rate`, { rating }).pipe(
        tap(() => {
          this.store.update(book.isbn, { rating });
        })
      );
  }
}
