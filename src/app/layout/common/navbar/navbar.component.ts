import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/module/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */
  constructor(private router: Router,private authService: AuthService) {}

  logout() {

    this.router.navigate(['/home']);

    this.authService.logout();
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Life Circle                                */
  /* -------------------------------------------------------------------------- */

  items: MenuItem[] | undefined;

  ngOnInit() {
    /* -------------------------------------------------------------------------- */
    /*                                  Variables                                 */
    /* -------------------------------------------------------------------------- */
    this.items = [
      {
        label: 'Home',
        routerLink: '/home',
      },
      {
        label: 'Stores',
        routerLink: '/stores',
      },
      {
        label: 'Basket',
        routerLink: '/basket',
      },
      {
        label: 'Contact',
        routerLink: '/contact',
      },
      {
        label: 'Setting',
        routerLink: '/setting',
      },
    ];
  }
}
