import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WodexiangqingPageRoutingModule } from './wodexiangqing-routing.module';

import { WodexiangqingPage } from './wodexiangqing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WodexiangqingPageRoutingModule
  ],
  declarations: [WodexiangqingPage]
})
export class WodexiangqingPageModule {}
