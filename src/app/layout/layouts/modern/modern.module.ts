import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModernComponent } from './modern.component';
import { ShareModule } from 'src/app/shared/shared.module';

import { NavbarModule } from '../../common/navbar/navbar.module';
import { SidebarModule } from '../../common/sidebar/sidebar.module';

@NgModule({
  imports: [CommonModule, NavbarModule, SidebarModule, ShareModule],
  declarations: [ModernComponent],
  exports: [ModernComponent],
})
export class ModernModule {}
