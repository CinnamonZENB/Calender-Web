import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';
import { ShareModule } from 'src/app/shared/shared.module';

import { LoginModule } from 'src/app/modules/auth/login/login.module';


@NgModule({
  imports: [CommonModule,ShareModule,LoginModule],
  declarations: [EmptyComponent],
  exports: [EmptyComponent],
})
export class EmptyModule {}
