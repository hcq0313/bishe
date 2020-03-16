import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShiguangshuoPageRoutingModule } from './shiguangshuo-routing.module';

import { ShiguangshuoPage } from './shiguangshuo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShiguangshuoPageRoutingModule
  ],
  declarations: [ShiguangshuoPage]
})
export class ShiguangshuoPageModule {}
