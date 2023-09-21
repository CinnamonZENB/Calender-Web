import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ELayout } from './shared/enum/layout.enum';
import { AuthGuard } from './shared/module/auth.guard';

export const routes: Route[] = [
  // Redirect empty path to '/?'
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  // Redirect signed in user to the ''
  /* -------------------------------------------------------------------------- */
  /*                                    Auth                                    */
  /* -------------------------------------------------------------------------- */
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: ELayout.MODERN,
    },
    children: [
      // {
      //   path: 'sign-in',
      //   loadChildren: () =>
      //     import('src/app/modules/auth/sign-in/sign-in.module').then(
      //       (m) => m.SignInModule
      //     ),
      // },
      // {
      //   path: 'sign-up',
      //   loadChildren: () =>
      //     import('src/app/modules/auth/sign-up/sign-up.module').then(
      //       (m) => m.SignUpModule
      //     ),
      // },
      {
        path: 'home',
        loadChildren: () =>
          import('src/app/modules/auth/home/home.module').then(
            (m) => m.HomeModule
          ),

      },
      {
        path: 'stores',
        loadChildren: () =>
          import('src/app/modules/auth/stores/stores.module').then(
            (m) => m.StoresModule
          ),
      },
      {
        path: 'basket',
        loadChildren: () =>
          import('src/app/modules/auth/basket/basket.module').then(
            (m) => m.BasketModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('src/app/modules/auth/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('src/app/modules/auth/login/login.module').then(
            (m) => m.LoginModule
          ),
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('src/app/modules/auth/setting/setting.module').then(
            (m) => m.SettingModule
          ),
          canActivate: [AuthGuard]
      },
    ],
  },
];
