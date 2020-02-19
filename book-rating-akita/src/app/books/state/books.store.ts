import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Book } from '../shared/book';

export interface BooksState extends EntityState<Book, string> {}

/**
 * You can think of an entity store as a table in a database,
 * where each table represents a flat collection of entities.
 */
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'books', idKey: 'isbn' })
export class BooksStore extends EntityStore<BooksState> {

  constructor() {
    super();
  }

}

