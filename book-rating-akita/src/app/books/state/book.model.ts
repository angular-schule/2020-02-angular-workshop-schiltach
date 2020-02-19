import { Book } from '../shared/book';

export function createBook(params: Partial<Book>) {
  return {
    rating: 1,
    ...params
  } as Book;
}
