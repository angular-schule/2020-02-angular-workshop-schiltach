import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

  @Input() book: Book;
  @Output() rateDown = new EventEmitter<Book>();
  @Output() rateUp = new EventEmitter<Book>();

  get stars() {
    return new Array(this.book.rating);
  }

  doRateDown() {
    this.rateDown.next(this.book);
  }

  doRateUp() {
    this.rateUp.next(this.book);
  }
}
