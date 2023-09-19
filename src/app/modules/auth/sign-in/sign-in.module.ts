import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';
import { signInRoutes } from './sign-in.routing';
import { PrimeNgModule } from 'src/app/shared/module/primeng.module';


@NgModule({
  imports: [CommonModule,
    PrimeNgModule,
    RouterModule.forChild(signInRoutes)],
  declarations: [SignInComponent],
})
export class SignInModule {}
