import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  isInvalid(name: string) {
    const control = this.bookForm.get(name);
    return control.touched && control.invalid;
  }

  hasError(name: string, code: string) {
    const control = this.bookForm.get(name);
    if (true) {
      return control.touched && control.hasError(code);
    }
  }

  submitForm() {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    };

    // 1. erzeuge ein Event mit dem namen "create"
    // 2. emitte das Event
    // 3. (subscribe) dich auf das Event (im Dashboard)
    // 4. füge das Buch dem Buch-Array hinzu, achte auf Immutability

    this.bookForm.reset();
  }

}
