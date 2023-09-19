import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { ShareModule } from './shared/shared.module';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CartService } from './shared/module/cart.service';
import { PrimeNgModule } from './shared/module/primeng.module';

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
  useHash: false,
  onSameUrlNavigation: 'reload',
};

@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    BrowserModule,
    ShareModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    PrimeNgModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, routerConfig),
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
