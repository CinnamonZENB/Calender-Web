import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './module/primeng.module';

const common = [CommonModule, FormsModule, ReactiveFormsModule, PrimeNgModule];

@NgModule({
  declarations: [],
  imports: [...common],
  exports: [...common],
})
export class ShareModule {}
