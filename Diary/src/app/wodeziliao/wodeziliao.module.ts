import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WodeziliaoPageRoutingModule } from './wodeziliao-routing.module';

import { WodeziliaoPage } from './wodeziliao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WodeziliaoPageRoutingModule
  ],
  declarations: [WodeziliaoPage]
})
export class WodeziliaoPageModule {}
