import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { ELayout } from 'src/app/shared/enum/layout.enum';
import { TLayout } from 'src/app/shared/type/layout.type';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */
  constructor(private _route: ActivatedRoute) {}

  /* -------------------------------------------------------------------------- */
  /*                                 Life Circle                                */
  /* -------------------------------------------------------------------------- */
  ngOnInit() {
    this._route.data.subscribe((vl) => {
      this.layout$.next(vl['layout']);
    });
  }

  ngOnDestroy(): void {
    this.layout$.complete();
    this.layout$.unsubscribe();
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  layout$: BehaviorSubject<TLayout> = new BehaviorSubject<TLayout>(
    ELayout.EMPTY
  );
}
