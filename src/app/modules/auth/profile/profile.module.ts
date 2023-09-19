import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { PrimeNgModule } from 'src/app/shared/module/primeng.module';
import { RouterModule } from '@angular/router';
import { profileRoutes } from './profile.routing';

@NgModule({
  imports: [
    CommonModule, PrimeNgModule, RouterModule.forChild(profileRoutes)
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
