import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WodeshoucangPageRoutingModule } from './wodeshoucang-routing.module';

import { WodeshoucangPage } from './wodeshoucang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WodeshoucangPageRoutingModule
  ],
  declarations: [WodeshoucangPage]
})
export class WodeshoucangPageModule {}
