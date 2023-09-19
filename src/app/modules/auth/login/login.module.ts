import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/module/primeng.module';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { loginRoutes } from './login.routing';
import { ShareModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, PrimeNgModule,ShareModule,RouterModule.forChild(loginRoutes)],
  declarations: [LoginComponent],
})
export class LoginModule {}
