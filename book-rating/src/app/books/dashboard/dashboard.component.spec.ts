import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { BookRatingService } from '../shared/book-rating.service';
import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {

    const bookRatingMock = {
      rateUp: book => book
    };

    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        // BookComponent // Integration-Test
      ],
      providers: [{
        provide: BookRatingService,
        useValue: bookRatingMock
        // useValue: undefined
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should always have 3 books', () => {
    expect(component.books.length).toBe(3);
  });

  it('doRateUp() should forward the execution to BookRatingService', () => {

    const rs = TestBed.inject(BookRatingService);
    spyOn(rs, 'rateUp').and.callThrough();

    const testBook = { isbn: '000'} as Book;
    component.doRateUp(testBook);

    expect(rs.rateUp).toHaveBeenCalled();
    expect(rs.rateUp).toHaveBeenCalledWith(testBook);
  });
});
