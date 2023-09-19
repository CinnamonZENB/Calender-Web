import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from 'src/app/shared/module/primeng.module';

import { SignUpComponent } from './sign-up.component';
import { signUpRoutes } from './sign-up.routing';

@NgModule({
  imports: [CommonModule, PrimeNgModule, RouterModule.forChild(signUpRoutes)],
  declarations: [SignUpComponent],
})
export class SignUpModule {}
