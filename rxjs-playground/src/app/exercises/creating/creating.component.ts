import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  logStream$ = new ReplaySubject<number | string>();

  ngOnInit() {
    /**
     * Erstelle ein Observable und abonniere den Datenstrom.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    // 1. Baustein: hallo Observers
    const observer = {
      next: smilie => this.log(smilie),
      error: e => this.log('FEHLER!' + e),
      complete: () => this.log('COMPLETE!')
    };

    const observable$ = new Observable<string>(subscriber => {
      subscriber.next('😀');
      subscriber.next('😎');
      subscriber.next('🤪');
      setTimeout(() => subscriber.error('💩'), 1000);

      const t = setTimeout(() => {
        subscriber.next('🤢');
        this.log('Hört mich jemand??!');
      }, 2000);

      return () => { this.log('unsubscribed!'); clearTimeout(t); }
    });

    // const sub = observable$.subscribe(observer);

    // setTimeout(() => sub.unsubscribe(), 1001);

    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      map(x => x * 10)
      // 2. filtere alle Zahlen raus, die kleiner sind als 40 (dh. 40, 50, 60...)
      // 3. bilde die Summe aller Zahlen
      // 4. optional (weil kniffelig): gebe so viele ❤️ aus, wie die Zahl groß ist
    ).subscribe((x) => this.log(x));


     /*****************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
