import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Book } from '../shared/book';
import { BooksService } from '../state/books.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private service: BooksService) { }

  ngOnInit() {

    this.book$ = this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      switchMap(isbn => this.service.get<Book>(isbn))
    );

  }

}
