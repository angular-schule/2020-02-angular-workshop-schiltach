import { Injectable } from '@angular/core';
import { QueryEntity, QueryConfig, Order } from '@datorama/akita';
import { BooksStore, BooksState } from './books.store';

/**
 * A Query is a class offering functionality responsible for querying the store.
 */
@QueryConfig({
  sortBy: 'rating',
  sortByOrder: Order.DESC
})
@Injectable({ providedIn: 'root' })
export class BooksQuery extends QueryEntity<BooksState> {

  constructor(protected store: BooksStore) {
    super(store);
  }

}
