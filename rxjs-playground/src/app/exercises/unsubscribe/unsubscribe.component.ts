import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, ReplaySubject, timer, Subscription } from 'rxjs';
import { takeWhile, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
})
export class UnsubscribeComponent implements OnInit, OnDestroy {

  logStream$ = new ReplaySubject<string | number>();
  destroyed = false;
  destroy$ = new Subject();

  ngOnInit() {
    const interval$ = timer(0, 1000);

    interval$.pipe(
      // takeWhile(() => !this.destroyed)
      takeUntil(this.destroy$)
    ).
    subscribe(
      msg => this.log(msg),
      err => this.log('ERROR: ' + err),
      () => this.log('COMPLETED')
    );
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
    // this.destroyed = true;
    this.destroy$.next();

    // Die Beste Möglichkeit
    // async pipe!
  }


  log(msg: string | number) {
    console.log(msg);
    this.logStream$.next(msg);
  }
}
