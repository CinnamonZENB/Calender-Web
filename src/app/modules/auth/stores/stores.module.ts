import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { storesRoutes } from './stores.routing';
import { PrimeNgModule } from 'src/app/shared/module/primeng.module';
import { StoresComponent } from './stores.component';
import { DataViewModule } from 'primeng/dataview';


@NgModule({
  imports: [CommonModule,PrimeNgModule,DataViewModule,
    RouterModule.forChild(storesRoutes)],

  declarations: [StoresComponent],
})
export class StoresModule {}
