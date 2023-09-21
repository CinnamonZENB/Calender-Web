import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';
import { ShareModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule,ShareModule],
  declarations: [EmptyComponent],
  exports: [EmptyComponent],
})
export class EmptyModule {}
