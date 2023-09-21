import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/module/primeng.module';
import { RouterModule } from '@angular/router';
import { ShareModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './login.component';
import { loginRoutes } from './login.routing';

@NgModule({
  imports: [CommonModule, PrimeNgModule,ShareModule,RouterModule.forChild(loginRoutes)],
  declarations: [LoginComponent],
})
export class LoginModule {}
