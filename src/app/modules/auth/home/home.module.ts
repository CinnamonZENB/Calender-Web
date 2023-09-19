import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routing';
import { PrimeNgModule } from 'src/app/shared/module/primeng.module';

@NgModule({
  imports: [CommonModule, PrimeNgModule,
    RouterModule.forChild(homeRoutes)],
  declarations: [HomeComponent],
})
export class HomeModule {}
