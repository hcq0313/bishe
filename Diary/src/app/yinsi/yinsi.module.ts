import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YinsiPageRoutingModule } from './yinsi-routing.module';

import { YinsiPage } from './yinsi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YinsiPageRoutingModule
  ],
  declarations: [YinsiPage]
})
export class YinsiPageModule {}
