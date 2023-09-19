import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/module/primeng.module';
import { BasketComponent } from './basket.component';
import { RouterModule } from '@angular/router';
import { basketRoutes } from './basket.routing';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  imports: [CommonModule,DataViewModule,PrimeNgModule,RouterModule.forChild(basketRoutes)],
  declarations: [BasketComponent],
})
export class BasketModule {}
