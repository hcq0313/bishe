import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YinsixiangqingPageRoutingModule } from './yinsixiangqing-routing.module';

import { YinsixiangqingPage } from './yinsixiangqing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YinsixiangqingPageRoutingModule
  ],
  declarations: [YinsixiangqingPage]
})
export class YinsixiangqingPageModule {}
