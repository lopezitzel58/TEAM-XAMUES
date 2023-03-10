import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutingPageRoutingModule } from './routing-routing.module';

import { RoutingPage } from './routing.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RoutingPage]
})
export class RoutingPageModule {}
