import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';
import { Router } from '@angular/router';
import { BooksService } from '../state/books.service';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  constructor(private service: BooksService, private router: Router) {}

  ngOnInit() { }

  createBook(book: Book) {
    this.service.add(book).subscribe(() => {
      this.router.navigate(['/books', book.isbn]);
    })
  }
}
