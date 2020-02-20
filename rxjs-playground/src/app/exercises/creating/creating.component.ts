import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';

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

     of('😀', '😌', '😇').subscribe(observer);


     /*****************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
