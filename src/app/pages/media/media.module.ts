import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediaPageRoutingModule } from './media-routing.module';

import { MediaPage } from './media.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MediaPageRoutingModule
  ],
  declarations: [MediaPage]
})
export class MediaPageModule {}
