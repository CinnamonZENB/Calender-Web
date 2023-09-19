import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { EmptyModule } from './layouts/empty/empty.module';
import { ModernModule } from './layouts/modern/modern.module';

@NgModule({
  imports: [CommonModule, EmptyModule, ModernModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
