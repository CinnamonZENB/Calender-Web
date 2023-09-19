
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { ShareModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { settingRoutes } from './setting.routing';


@NgModule({
  imports: [
    CommonModule, ShareModule, RouterModule.forChild(settingRoutes)
  ],
  declarations: [SettingComponent]
})
export class SettingModule {
}
