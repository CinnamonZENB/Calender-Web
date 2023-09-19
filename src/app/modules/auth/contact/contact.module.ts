import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { contactRoutes } from './contact.routing';
import { ShareModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, ShareModule, RouterModule.forChild(contactRoutes)],
  declarations: [ContactComponent],
})
export class ContactModule {}
