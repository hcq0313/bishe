import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeiriyijuPageRoutingModule } from './meiriyiju-routing.module';

import { MeiriyijuPage } from './meiriyiju.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeiriyijuPageRoutingModule
  ],
  declarations: [MeiriyijuPage]
})
export class MeiriyijuPageModule {}
