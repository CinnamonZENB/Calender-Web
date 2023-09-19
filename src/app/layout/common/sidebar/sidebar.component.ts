import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */
  constructor(private _router: Router) {}

  /* -------------------------------------------------------------------------- */
  /*                                 Life Circle                                */
  /* -------------------------------------------------------------------------- */
  ngOnInit() {}

  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  items = [
    {
      label: 'Finder',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
      router: '/product-management',
    },
    {
      label: 'App Store',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg',
    },
    {
      label: 'Photos',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
    },
    {
      label: 'Trash',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
    },
  ];

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  onClick(e: string): void {
    this._router.navigate([e]);
  }
}
