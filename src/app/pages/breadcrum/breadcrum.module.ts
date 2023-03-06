import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreadcrumPageRoutingModule } from './breadcrum-routing.module';

import { BreadcrumPage } from './breadcrum.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreadcrumPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BreadcrumPage]
})
export class BreadcrumPageModule {}
