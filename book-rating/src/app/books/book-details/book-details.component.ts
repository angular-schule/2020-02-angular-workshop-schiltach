import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { map, mergeMap, switchMap, tap, catchError, share, shareReplay, retry } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  show = false;

  book$ = this.route.paramMap.pipe(
    map(p => p.get('isbn')),
    switchMap(isbn => this.bs.getSingleBook(isbn).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => of({
        isbn: 'FEHLER',
        description: 'Error loadig' + e.url
      }))
    ))
  );

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

}
