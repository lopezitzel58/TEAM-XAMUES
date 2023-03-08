import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloatingPageRoutingModule } from './floating-routing.module';

import { FloatingPage } from './floating.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FloatingPageRoutingModule
  ],
  declarations: [FloatingPage]
})
export class FloatingPageModule {}
